/**
 * Sobe a pasta "assets" (do repo rbeauty-catalogo) para um bucket
 * do Supabase Storage, mantendo a mesma estrutura de subpastas por marca.
 *
 * COMO USAR:
 * 1) npm install @supabase/supabase-js
 * 2) Rode este script na raiz do repo (onde fica a pasta "assets"):
 *      node upload-assets.js
 *
 * IMPORTANTE:
 * - Use a SERVICE_ROLE key aqui (Project Settings > API > service_role),
 *   NUNCA a anon key, pois o upload em massa precisa ignorar RLS.
 * - A service_role key é secreta: rode isso só localmente, nunca no
 *   navegador nem no app.js do site.
 */

const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

// ====== CONFIGURE AQUI ======
const SUPABASE_URL = "https://kzqnmhshskrxquvfywyd.supabase.co";
const SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6cW5taHNoc2tyeHF1dmZ5d3lkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NzU1Mzg1MSwiZXhwIjoyMTAzMTI5ODUxfQ.R0AJBQZj9yhg0QIorhfd3s_A5BsNjBoUZpAMILHaWMM"; // Project Settings > API
const BUCKET_NAME = "products"; // nome do bucket que você criar no Storage
const ASSETS_DIR = path.join(__dirname, "assets"); // ajuste se o script não estiver na raiz do repo
// =============================

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

const EXT_TO_MIME = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".jfif": "image/jpeg",
};

function walk(dir, base = "") {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    const relPath = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      files = files.concat(walk(fullPath, relPath));
    } else {
      files.push({ fullPath, relPath });
    }
  }
  return files;
}

async function main() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`Pasta não encontrada: ${ASSETS_DIR}`);
    process.exit(1);
  }

  const files = walk(ASSETS_DIR);
  console.log(`Encontrados ${files.length} arquivos. Enviando para o bucket "${BUCKET_NAME}"...\n`);

  let ok = 0;
  let fail = 0;

  for (const file of files) {
    const ext = path.extname(file.relPath).toLowerCase();
    const contentType = EXT_TO_MIME[ext] || "application/octet-stream";
    const fileBuffer = fs.readFileSync(file.fullPath);

    // Caminho dentro do bucket = mesma estrutura de pastas (sem o prefixo "assets/")
    const storagePath = file.relPath;

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(storagePath, fileBuffer, {
        contentType,
        upsert: true, // sobrescreve se já existir (útil se rodar de novo)
      });

    if (error) {
      console.error(`✗ ${storagePath} — ${error.message}`);
      fail++;
    } else {
      console.log(`✓ ${storagePath}`);
      ok++;
    }
  }

  console.log(`\nConcluído: ${ok} enviados, ${fail} com erro.`);
  console.log(`\nURL base pública das imagens:`);
  console.log(`${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/`);
}

main();
