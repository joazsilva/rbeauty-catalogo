/* ===================== DATA ===================== */
const WHATSAPP_NUMBER = "5599992282510";

const PRODUCTS = [
{name:"Zero Pore Pad",brand:"MEDICUBE",ml:"70 pads",category:"Pads",price:239.00,images:['assets/medicube/zeropad.jpeg'],
 desc:"Pads de esfoliação dupla com AHA e BHA que removem células mortas, desobstroem os poros e controlam a oleosidade. Ajudam a reduzir cravos, suavizar a textura da pele e minimizar a aparência dos poros. Indicados principalmente para peles mistas, oleosas e com tendência a acne."},
{name:"PDRN Pink Peptide Serum",brand:"MEDICUBE",ml:"30ml",category:"Séruns",price:230.00,images:['assets/medicube/peptide-serum.webp'],
 desc:"Sérum coreano com PDRN (DNA de salmão) e peptídeos, desenvolvido para hidratar profundamente, melhorar a elasticidade e fortalecer a barreira cutânea. Auxilia na suavização de linhas finas e proporciona uma pele mais firme, luminosa e saudável. Indicado para todos os tipos de pele."},
{name:"PDRN 99% Salmon Ampoule",brand:"MEDICUBE",ml:null,category:"Séruns",price:159.00,images:['assets/medicube/serum-ampola.jpg'],
 desc:"Ampoule coreana altamente concentrada em PDRN (DNA de salmão), ativo conhecido por favorecer a regeneração e recuperação da pele. Proporciona hidratação intensa, melhora a firmeza e ajuda a reduzir sinais de cansaço. Ideal para peles secas, sensibilizadas ou com sinais de envelhecimento."},
{name:"Collagen Night Wrapping Mask",brand:"MEDICUBE",ml:"75ml",category:"Máscaras",price:219.00,images:['assets/medicube/collagen-night.jpg'],
 desc:"Máscara facial noturna coreana enriquecida com colágeno, desenvolvida para hidratar profundamente enquanto a pele descansa. Forma uma película que ajuda a potencializar a ação dos ativos, deixando a pele mais firme, macia e revitalizada ao acordar. Indicada para todos os tipos de pele."},
{name:"PDRN Pink Vita Coating Mask",brand:"MEDICUBE",ml:null,category:"Máscaras",price:50.00,images:['assets/medicube/coating-mask.jpg'],
 desc:"Máscara facial coreana com PDRN e vitaminas, criada para hidratar, revitalizar e devolver luminosidade à pele opaca. Ajuda a fortalecer a barreira cutânea e proporciona efeito glow imediato, deixando a pele mais uniforme e saudável. Indicada para todos os tipos de pele."},
{name:"Deep Vita C Capsule Cream",brand:"MEDICUBE",ml:"55g",category:"Hidratantes",price:245.00,images:['assets/medicube/capsule-cream.webp'],
 desc:"Creme hidratante coreano com cápsulas de vitamina C que se rompem durante a aplicação, oferecendo ação antioxidante e iluminadora. Combina 50% de água de espinheiro-marítimo, 5% de niacinamida e vitaminas que auxiliam na redução da aparência de manchas, uniformizam o tom da pele e promovem hidratação duradoura. Indicado para todos os tipos de pele, especialmente as com manchas e falta de viço."},
{name:"TXA Niacinamide Capsule Cream",brand:"MEDICUBE",ml:"55g",category:"Hidratantes",price:220.00,images:['assets/medicube/niacinamide-capsule-cream.webp'],
 desc:"Creme hidratante coreano formulado com Ácido Tranexâmico (TXA) e Niacinamida, ativos reconhecidos por auxiliar no clareamento de manchas e uniformização da pele. Também ajuda a controlar a oleosidade e fortalecer a barreira cutânea. Ideal para peles com hiperpigmentação ou marcas de acne."},
{name:"PDRN Pink Collagen Capsule Cream",brand:"MEDICUBE",ml:"55g",category:"Hidratantes",price:220.00,images:['assets/medicube/collagen-capsule-cream.webp'],
 desc:"Hidratante coreano que combina PDRN e colágeno para promover hidratação intensa, firmeza e elasticidade. Auxilia na redução da aparência de linhas finas e proporciona uma pele mais preenchida e viçosa. Indicado para todos os tipos de pele, especialmente aquelas com manchas, tom irregular ou sinais de envelhecimento."},
{name:"PDRN Pink Collagen Exosome Shot 2000",brand:"MEDICUBE",ml:"30ml",category:"Tratamentos Intensivos",price:220.00,badge:"premium",images:['assets/medicube/collagen-exosome-shot.webp'],
 desc:"Tratamento intensivo coreano que associa PDRN, colágeno e exossomos. Promove renovação da pele, melhora a firmeza e auxilia na redução dos sinais de envelhecimento. Sua tecnologia utiliza microagulhas cosméticas (espículas) de origem mineral que potencializam a absorção dos ativos nas camadas mais profundas. Indicado para peles com perda de elasticidade."},
{name:"One Day Exosome Shot 7500",brand:"MEDICUBE",ml:"30ml",category:"Tratamentos Intensivos",price:240.00,badge:"premium",images:['assets/medicube/one-day-exosome.avif'],
 desc:"Tratamento intensivo coreano que combina microespículas de origem mineral, exossomos e os ácidos AHA, BHA e PHA para promover uma renovação da pele semelhante ao efeito de um microagulhamento líquido. As microespículas ajudam a potencializar a absorção dos ativos, enquanto os ácidos refinam a textura e os poros. Deve ser utilizado à noite; é normal sentir uma leve sensação de pinicamento durante a aplicação."},
{name:"Jelly Brush",brand:"MEDICUBE",ml:"espátula de silicone",category:"Acessórios de Skincare",price:75.00,images:['assets/medicube/jelly-brush.jpg'],
 desc:"Acessório desenvolvido para aplicar máscaras faciais e cremes de forma uniforme e higiênica. O silicone flexível evita desperdícios, reduz o contato das mãos com o produto e facilita a aplicação em todas as áreas do rosto."},
{name:"Age-R Booster Pro",brand:"MEDICUBE",ml:null,category:"Aparelhos de Skincare",price:1399.00,badge:"premium",images:['assets/medicube/booster-pro.avif'],
 desc:"Dispositivo de skincare desenvolvido para potencializar a absorção dos cosméticos por meio de tecnologias avançadas, tornando a rotina de cuidados mais eficaz."},
{name:"Age-R Booster Mini",brand:"MEDICUBE",ml:null,category:"Aparelhos de Skincare",price:999.00,badge:"premium",images:['assets/medicube/booster-mini.jfif'],
 desc:"Versão compacta do famoso Age-R Booster Pro, ideal para quem busca praticidade sem abrir mão da tecnologia. Auxilia na absorção dos produtos aplicados na pele."},
{name:"Retinal Shot",brand:"CELIMAX",ml:"15ml",category:"Tratamentos Intensivos",price:219.00,badge:"bestseller",images:['assets/celimax/retinal-shot.avif'],
 desc:"O tratamento antienvelhecimento mais famoso da marca coreana Celimax, formulado com retinal e tecnologia de microespículas que potencializa a absorção dos ativos. Auxilia na renovação celular, melhora a firmeza da pele, suaviza linhas finas e rugas e refina a textura e a aparência dos poros. Indicado para peles com sinais de envelhecimento ou textura irregular."},
{name:"Retinol Shot Tightening Serum",brand:"CELIMAX",ml:"30ml",category:"Séruns",price:179.00,images:['assets/celimax/shot-tightening.avif'],
 desc:"Sérum coreano com retinol, desenvolvido para melhorar a firmeza da pele, suavizar rugas e estimular a renovação celular. Também auxilia na uniformização da textura e no controle da oleosidade. Indicado para peles maduras e para quem deseja prevenir os primeiros sinais da idade."},
{name:"Pore + Dark Spot Brightening Cream",brand:"CELIMAX",ml:"35ml",category:"Hidratantes",price:199.00,images:['assets/celimax/dark-spot.jpg'],
 desc:"Creme hidratante coreano multifuncional formulado para auxiliar na redução de manchas e marcas de acne, uniformizar o tom da pele e melhorar a aparência da textura e dos poros."},
{name:"Madagascar Centella Ampoule",brand:"SKIN1004",ml:"55ml",category:"Séruns",price:199.00,badge:"bestseller",images:['assets/skin1004/adagascar-centella.webp'],
 desc:"Ampoule facial coreana formulada com extrato puro de Centella Asiática, conhecida por sua ação calmante e reparadora. Ajuda a reduzir irritações, vermelhidão, oleosidade e o ressecamento, enquanto hidrata profundamente e fortalece a barreira cutânea. Indicada para todos os tipos de pele, especialmente as sensíveis."},
{name:"Madagascar Centella Tea-Trica Ampoule",brand:"SKIN1004",ml:"100ml",category:"Séruns",price:249.00,images:['assets/skin1004/centella-tea.avif'],
 desc:"Ampoule coreana que combina Centella Asiática, complexo Tea-Trica e ativos calmantes para controlar a oleosidade e aliviar peles com tendência à acne. Ajuda a reduzir vermelhidão, fortalecer a barreira cutânea e equilibrar a pele. Indicada para peles oleosas, acneicas e sensíveis."},
{name:"Madagascar Centella Tone Brightening Capsule Ampoule",brand:"SKIN1004",ml:"50ml",category:"Séruns",price:159.00,images:['assets/skin1004/centella-tone-brightening.webp'],
 desc:"Ampoule coreana formulada com Centella Asiática, Niacinamida e cápsulas iluminadoras, desenvolvida para hidratar, uniformizar o tom da pele e reduzir a aparência de manchas. Deixa a pele mais luminosa e saudável sem causar irritação. Indicada para todos os tipos de pele."},
{name:"Madagascar Centella Light Cleansing Oil",brand:"SKIN1004",ml:"200ml",category:"Limpeza",price:219.00,images:['assets/skin1004/centella-light-cleansing-oil.webp'],
 desc:"Óleo de limpeza facial coreano que remove maquiagem, protetor solar e impurezas sem ressecar a pele. Formulado com Centella Asiática e óleos vegetais leves, limpa profundamente enquanto preserva a hidratação natural da pele. Indicado para todos os tipos de pele."},
{name:"Kit Madagascar Centella Travel",brand:"SKIN1004",ml:null,category:"Kits",price:349.00,badge:"new",images:['assets/skin1004/centella-travel.jfif'],
 desc:"Kit coreano com os principais produtos da linha Madagascar Centella, ideal para conhecer a marca ou levar em viagens. Reúne itens para limpeza, hidratação e cuidado calmante, proporcionando uma rotina completa para fortalecer a barreira cutânea. Indicado para todos os tipos de pele."},
{name:"No. 9 NAD+ Retinol Volumetox Eye Cream",brand:"NUMBUZIN",ml:"10ml",category:"Área dos Olhos",price:260.00,badge:"bestseller",images:['assets/numbuzin/retinol-volumetox.webp'],
 desc:"Um dos produtos mais icônicos da marca coreana Numbuzin. Creme antienvelhecimento para a área dos olhos formulado com NAD+, retinol e peptídeos, desenvolvido para reduzir linhas de expressão e rugas (pés de galinha), melhorar a firmeza da pele e minimizar bolsas e olheiras. Proporciona hidratação e aparência mais descansada. Indicado para todos os tipos de pele."},
{name:"No. 9 NAD+ Bio Lifting Essence",brand:"NUMBUZIN",ml:"50ml",category:"Essências",price:319.00,badge:"bestseller",images:['assets/numbuzin/bio-lifting.webp'],
 desc:"Essência mais famosa da marca coreana Numbuzin, enriquecida com NAD+, peptídeos e ativos firmadores, promove o efeito glass skin ao melhorar a elasticidade, a firmeza e a hidratação da pele. Também auxilia na redução de linhas finas, proporcionando uma aparência mais viçosa, luminosa e revitalizada."},
{name:"Niacinamide 10% + TXA 4% Serum",brand:"ANUA",ml:"30ml",category:"Séruns",price:260.00,images:['assets/anua/niacinamide.webp'],
 desc:"Sérum coreano com textura aquosa e rápida absorção, formulado com 10% de Niacinamida e 4% de Ácido Tranexâmico (TXA) focado na redução de manchas, marcas de acne e hiperpigmentação. Também ajuda a controlar a oleosidade e uniformizar o tom da pele. Indicado para todos os tipos de pele, especialmente as com tom irregular."},
{name:"345 Relief Cream",brand:"DR. ALTHEA",ml:"50ml",category:"Hidratantes",price:260.00,images:['assets/dr-althea/relief-cream.avif'],
 desc:"Hidratante coreano com textura gel-creme, desenvolvido para hidratar, acalmar e fortalecer a barreira cutânea. Sua fórmula leve proporciona conforto sem pesar, sendo ideal para peles oleosas, acneicas, sensíveis, pós-ácidos e pós-retinal."},
{name:"Vitamin C Boosting Serum",brand:"DR. ALTHEA",ml:"30ml",category:"Séruns",price:219.00,images:['assets/dr-althea/dr-althea-vitamin-c.avif'],
 desc:"Sérum coreano formulado com 63% de extrato de espinheiro-amarelo, naturalmente rico em vitamina C. Ajuda a iluminar a pele, reduzir a aparência de manchas e marcas de acne, uniformizar o tom e oferecer ação antioxidante, enquanto promove hidratação e uma aparência mais radiante."},
{name:"Airy Sunstick",brand:"ABIB",ml:"23g",category:"Protetor Solar",price:199.00,badge:"bestseller",images:['assets/abib/abib_airy_sunstick.webp'],
 desc:"Protetor solar em bastão, queridinho da beleza coreana, com alta proteção contra os raios UVA e UVB e acabamento leve, confortável e sem efeito pegajoso. Ajuda a controlar a oleosidade e é fácil de reaplicar ao longo do dia, inclusive sobre a maquiagem, sem borrá-la. Indicado para todos os tipos de pele, especialmente as mistas e oleosas."},
{name:"PDRN Reedle Shot Eye Lifter",brand:"VT COSMETICS",ml:"15ml",category:"Área dos Olhos",price:319.00,badge:"premium",images:['assets/vt-cosmetics/vt-cosmetics-reedle-shot.webp'],
 desc:"Tratamento coreano para a área dos olhos que combina PDRN e a exclusiva tecnologia Reedle Shot, com microespículas de origem mineral que potencializam a absorção dos ativos. Auxilia na melhora da firmeza, suaviza linhas finas, reduz os sinais de cansaço e proporciona hidratação intensa, deixando o olhar mais revitalizado e iluminado. Durante a aplicação é comum sentir um leve formigamento causado pelas microespículas."},
{name:"Dark Spot Correcting Glow Serum",brand:"AXIS-Y",ml:"50ml",category:"Séruns",price:199.00,images:['assets/axis-y/serum-facial-axis-y.webp'],
 desc:"Sérum clareador da marca coreana AXIS-Y, enriquecido com 5% de Niacinamida e Esqualano. Ajuda a uniformizar o tom da pele, suavizar manchas, melasma e marcas de acne, além de promover hidratação sem pesar e um acabamento naturalmente iluminado. Indicado para todos os tipos de pele."},
{name:"Grow Turn Exosome",brand:"LILYEVE",ml:"100ml",category:"Cabelo",price:309.00,badge:"bestseller",images:['assets/lilyeve/grow-turn-brush.webp'],
 desc:"Tratamento capilar mais vendido da marca coreana Lilyeve, desenvolvido com exclusiva tecnologia de exossomos para fortalecer o couro cabeludo e revitalizar os fios desde a raiz. Sua fórmula ajuda a reduzir a queda, estimula um ambiente favorável ao crescimento saudável dos cabelos e melhora a densidade, a hidratação e o brilho. Indicado para todos os tipos de cabelo, especialmente os finos, enfraquecidos ou com queda."},
{name:"Grow:Turn Exosome Dual Lash Serum",brand:"LILYEVE",ml:null,category:"Cílios/Sobrancelhas",price:299.00,badge:"new",images:['assets/lilyeve/Lilyeve_Grow_Turn_Exosome.webp'],
 desc:"Sérum coreano enriquecido com exossomos e ativos fortalecedores, que promove cílios e sobrancelhas com aparência mais cheia, forte e saudável. Possui sistema Dual Care, com dois aplicadores exclusivos: um pincel para nutrir e proteger os fios durante o dia e um aplicador de precisão para revitalizar a raiz durante a noite."},
{name:"Premium Touch Hair Mask",brand:"FINO",ml:"230g",category:"Cabelo",price:159.00,images:['assets/fino/mascara_premium_touch_hair.webp'],
 desc:"A famosa máscara capilar japonesa reconhecida por promover um verdadeiro tratamento de salão em casa. Enriquecida com geleia real, PCA, Lipidure EX e esqualano, hidrata profundamente, repara os danos e devolve maciez, brilho e sedosidade aos fios. Ideal para cabelos secos, danificados, quimicamente tratados ou com frizz."},
{name:"Premium Touch Hair Oil",brand:"FINO",ml:"70ml",category:"Cabelo",price:159.00,images:['assets/fino/fino-premium-touch-hair-oil.webp'],
 desc:"O óleo capilar japonês mais famoso da linha Fino, desenvolvido para reparar, nutrir e proteger os fios sem pesar. Sua fórmula de textura leve hidrata profundamente, controla o frizz, sela as cutículas e proporciona brilho intenso e toque sedoso, além de ajudar a proteger os cabelos dos danos causados pelo calor. Ideal para cabelos secos, danificados ou quimicamente tratados."},
{name:"Tsubaki Premium EX Repair Mask",brand:"SHISEIDO",ml:"180g",category:"Cabelo",price:159.00,badge:"bestseller",images:['assets/shiseido/tsubaki_premium_repair_mask.webp'],
 desc:"Uma das máscaras capilares mais famosas do Japão, desenvolvida pela Shiseido para reparar profundamente cabelos secos e danificados. Sua fórmula com óleo de camélia (Tsubaki), proteínas e aminoácidos proporciona hidratação intensa, reduz o frizz, restaura a maciez e devolve brilho e sedosidade aos fios. Ideal para cabelos ressecados, quimicamente tratados ou danificados pelo calor."},
{name:"CER-100 Hair Muscle Essence Oil",brand:"ELIZAVECCA",ml:"100ml",category:"Cabelo",price:159.00,images:['assets/elizavecca/elizavecca-hair-muscle-essence-oil.webp'],
 desc:"Óleo capilar da marca coreana Elizavecca, formulado com colágeno hidrolisado, ceramidas e óleos nutritivos para hidratar e proteger os fios. Ajuda a controlar o frizz, reduzir as pontas duplas e proporcionar brilho intenso sem pesar. Indicado para cabelos secos, danificados e quimicamente tratados."}
].map((p,i)=>({...p, id:i+1}));

const CATEGORIES = [...new Set(PRODUCTS.map(p=>p.category))];
const BRANDS = [...new Set(PRODUCTS.map(p=>p.brand))];

/* ===================== ICONS (line-art bottle set) ===================== */
const ICONS = {
Séruns: `<path d="M40 18h20v14c8 4 12 12 12 22v58a8 8 0 0 1-8 8H36a8 8 0 0 1-8-8V54c0-10 4-18 12-22V18z" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="36" y="10" width="28" height="10" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="30" y1="70" x2="70" y2="70" stroke="currentColor" stroke-width="1.6" opacity=".5"/>`,
Essências: `<path d="M40 18h20v14c8 4 12 12 12 22v58a8 8 0 0 1-8 8H36a8 8 0 0 1-8-8V54c0-10 4-18 12-22V18z" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="36" y="10" width="28" height="10" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="30" y1="70" x2="70" y2="70" stroke="currentColor" stroke-width="1.6" opacity=".5"/>`,
"Tratamentos Intensivos": `<path d="M42 14h16v24l6 10v54a6 6 0 0 1-6 6H42a6 6 0 0 1-6-6V48l6-10V14z" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="40" y="8" width="20" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="50" cy="80" r="10" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".5"/>`,
Hidratantes: `<rect x="24" y="34" width="52" height="56" rx="14" fill="none" stroke="currentColor" stroke-width="2.2"/><ellipse cx="50" cy="34" rx="26" ry="8" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="34" y="20" width="32" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="2.2"/>`,
Máscaras: `<rect x="24" y="34" width="52" height="56" rx="14" fill="none" stroke="currentColor" stroke-width="2.2"/><ellipse cx="50" cy="34" rx="26" ry="8" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="34" y="20" width="32" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="2.2"/>`,
Pads: `<circle cx="38" cy="46" r="24" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="58" cy="60" r="24" fill="none" stroke="currentColor" stroke-width="2" opacity=".55"/><circle cx="38" cy="46" r="14" fill="none" stroke="currentColor" stroke-width="1.4" opacity=".5"/>`,
"Acessórios de Skincare": `<path d="M50 12c10 0 16 8 16 18 0 12-8 18-16 26-8-8-16-14-16-26 0-10 6-18 16-18z" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="46" y="56" width="8" height="34" rx="4" fill="none" stroke="currentColor" stroke-width="2.2"/>`,
"Aparelhos de Skincare": `<rect x="38" y="14" width="24" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="50" cy="30" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="42" y="60" width="16" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2.2"/>`,
Limpeza: `<rect x="30" y="30" width="40" height="60" rx="12" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="40" y="14" width="20" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M60 14 L70 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="70" cy="6" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/>`,
Kits: `<rect x="20" y="38" width="60" height="46" rx="4" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M20 52h60" stroke="currentColor" stroke-width="2.2"/><path d="M42 38v46M58 38v46" stroke="currentColor" stroke-width="1.6" opacity=".5"/><path d="M34 38c0-10 6-18 16-18s16 8 16 18" fill="none" stroke="currentColor" stroke-width="2.2"/>`,
"Área dos Olhos": `<path d="M50 26c-16 0-28 12-32 24 4 12 16 24 32 24s28-12 32-24c-4-12-16-24-32-24z" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="50" cy="50" r="9" fill="none" stroke="currentColor" stroke-width="2"/>`,
"Protetor Solar": `<rect x="36" y="30" width="28" height="56" rx="8" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="40" y="16" width="20" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="50" cy="8" r="5" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".6"/><path d="M40 10l-6-4M60 10l6-4" stroke="currentColor" stroke-width="1.4" opacity=".5"/>`,
Cabelo: `<path d="M40 18h20v14c8 4 12 12 12 22v58a8 8 0 0 1-8 8H36a8 8 0 0 1-8-8V54c0-10 4-18 12-22V18z" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="36" y="10" width="28" height="10" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M38 60c4 8 4 16 0 24M50 60c4 8 4 16 0 24M62 60c4 8 4 16 0 24" stroke="currentColor" stroke-width="1.4" opacity=".4" stroke-linecap="round"/>`,
"Cílios/Sobrancelhas": `<rect x="45" y="10" width="10" height="50" rx="5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M32 62c8 8 28 8 36 0" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M30 66l6 6M70 66l-6 6M50 68v10" stroke="currentColor" stroke-width="1.6" opacity=".55" stroke-linecap="round"/>`
};
function iconSvg(cat, extra=""){
  const p = ICONS[cat] || ICONS["Séruns"];
  return `<svg viewBox="0 0 100 100" style="color:var(--gold-deep)" ${extra}>${p}</svg>`;
}
function iconVariant(cat, variant){
  const styles = ["", "transform:rotate(8deg) scale(1.03)", "transform:scale(1.18)"];
  return iconSvg(cat, `style="color:var(--gold-deep);${styles[variant]||''}"`);
}

/* ===================== IMAGENS DOS PRODUTOS =====================
   Para colocar as fotos reais dos seus produtos, edite o campo
   "images" de cada produto lá em cima na lista PRODUCTS.
   Exemplo:
     images:["fotos/zero-pore-pad.jpg"]
   ou com mais de uma foto (o cliente poderá passar entre elas):
     images:["fotos/produto-1.jpg","fotos/produto-2.jpg"]
   Também funciona com links da internet, ex: images:["https://.../foto.jpg"]
   Se o campo ficar vazio (images:[]), o ícone ilustrativo é usado no lugar.
   =================================================================== */
function productImage(p, idx=0){
  if(p.images && p.images.length) return p.images[idx] || p.images[0];
  return null;
}
// Miniatura usada nos cards, carrinho e produtos relacionados
function mediaHtml(p, extra=""){
  const src = productImage(p);
  if(src){
    return `<img src="${src}" alt="${p.name}" class="prod-img" loading="lazy" ${extra} onerror="this.replaceWith(iconEl('${p.category.replace(/'/g,"\\'")}'))">`;
  }
  return iconSvg(p.category, extra);
}
// Imagem grande usada na página do produto (respeita o índice da galeria)
function mediaHtmlFull(p, idx){
  const src = productImage(p, idx);
  if(src){
    return `<img src="${src}" alt="${p.name}" class="prod-img" loading="lazy" onerror="this.replaceWith(iconEl('${p.category.replace(/'/g,"\\'")}'))">`;
  }
  return iconVariant(p.category, idx);
}
// Cria o elemento de ícone (usado como substituto quando uma imagem falha ao carregar)
function iconEl(cat){
  const div = document.createElement('div');
  div.style.cssText = "width:100%;height:100%;display:flex;align-items:center;justify-content:center;";
  div.innerHTML = iconSvg(cat);
  return div;
}
function productGalleryCount(p){
  return (p.images && p.images.length) ? p.images.length : 3;
}

/* ===================== STATE ===================== */
const state = {
  view:'home', // home | product
  productId:null,
  cart:[], // {id, qty}
  favorites:new Set(),
  category:'all',
  brand:'all',
  sort:'relevance',
  query:'',
  cartOpen:false,
  menuOpen:false,
  searchOpen:false,
  lightbox:null,
  galleryIdx:0,
  toastMsg:null,
};
let toastTimer=null;

function fmt(n){ return "R$ " + n.toFixed(2).replace('.',','); }
function findProduct(id){ return PRODUCTS.find(p=>p.id===id); }
function cartCount(){ return state.cart.reduce((s,c)=>s+c.qty,0); }
function cartTotal(){ return state.cart.reduce((s,c)=>s+c.qty*findProduct(c.id).price,0); }

function showToast(msg){
  state.toastMsg = msg;
  render();
  clearTimeout(toastTimer);
  requestAnimationFrame(()=>{ document.getElementById('toast')?.classList.add('show'); });
  toastTimer = setTimeout(()=>{ document.getElementById('toast')?.classList.remove('show'); setTimeout(()=>{state.toastMsg=null; render();},280); }, 2200);
}

function addToCart(id, qty=1){
  const existing = state.cart.find(c=>c.id===id);
  if(existing){ existing.qty += qty; } else { state.cart.push({id, qty}); }
  render();
  showToast("Adicionado ao carrinho ✓");
}
function updateQty(id, delta){
  const item = state.cart.find(c=>c.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0){ state.cart = state.cart.filter(c=>c.id!==id); }
  render();
}
function removeFromCart(id){
  state.cart = state.cart.filter(c=>c.id!==id);
  render();
}
function toggleFav(id, ev){
  if(ev) ev.stopPropagation();
  if(state.favorites.has(id)) state.favorites.delete(id); else state.favorites.add(id);
  render();
}
function openProduct(id){
  state.view='product'; state.productId=id; state.galleryIdx=0;
  render();
  window.scrollTo(0,0);
  requestAnimationFrame(()=>document.querySelector('.pdp-overlay')?.classList.add('show'));
}
function closeProduct(){
  document.querySelector('.pdp-overlay')?.classList.remove('show');
  setTimeout(()=>{ state.view='home'; state.productId=null; render(); }, 300);
}
function openCart(){ state.cartOpen=true; render(); requestAnimationFrame(()=>{document.getElementById('cartDrawer')?.classList.add('show'); document.getElementById('overlay')?.classList.add('show');}); }
function closeCart(){ document.getElementById('cartDrawer')?.classList.remove('show'); document.getElementById('overlay')?.classList.remove('show'); setTimeout(()=>{state.cartOpen=false; render();},280); }
function openMenu(){ state.menuOpen=true; render(); requestAnimationFrame(()=>{document.getElementById('menuDrawer')?.classList.add('show'); document.getElementById('overlay2')?.classList.add('show');}); }
function closeMenu(){ document.getElementById('menuDrawer')?.classList.remove('show'); document.getElementById('overlay2')?.classList.remove('show'); setTimeout(()=>{state.menuOpen=false; render();},280); }
function toggleSearch(){ state.searchOpen=!state.searchOpen; render(); if(state.searchOpen){ requestAnimationFrame(()=>document.getElementById('searchInput')?.focus()); } }
function openLightbox(id){ state.lightbox=id; render(); requestAnimationFrame(()=>document.getElementById('lightbox')?.classList.add('show')); }
function closeLightbox(){ document.getElementById('lightbox')?.classList.remove('show'); setTimeout(()=>{state.lightbox=null; render();},200); }
function setCategory(c){ state.category=c; render(); }
function setBrandFilter(b){ state.brand=b; render(); }
function setSort(v){ state.sort=v; render(); }
function setQuery(v){ state.query=v; renderProductsOnly(); }
function goHome(){ state.view='home'; state.productId=null; render(); window.scrollTo(0,0); }
function nextGalleryImg(dir){ state.galleryIdx=(state.galleryIdx+dir+3)%3; render(); }

function whatsappCheckout(single=null){
  let lines = [];
  let total = 0;
  if(single){
    const p = findProduct(single.id);
    lines.push(`• ${p.brand} — ${p.name}${p.ml?` (${p.ml})`:''}\\n  Quantidade: ${single.qty}`);
    total = p.price*single.qty;
  } else {
    if(state.cart.length===0){ showToast("Seu carrinho está vazio"); return; }
    state.cart.forEach(c=>{
      const p = findProduct(c.id);
      lines.push(`• ${p.brand} — ${p.name}${p.ml?` (${p.ml})`:''}\\n  Quantidade: ${c.qty}`);
      total += p.price*c.qty;
    });
  }
  const msg = `Olá! 👋\\n\\nTenho interesse nos seguintes produtos:\\n\\n${lines.join('\\n\\n')}\\n\\nTotal: ${fmt(total)}\\n\\nGostaria de finalizar meu pedido.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function getFiltered(){
  let list = [...PRODUCTS];
  if(state.category!=='all') list = list.filter(p=>p.category===state.category);
  if(state.brand!=='all') list = list.filter(p=>p.brand===state.brand);
  if(state.query.trim()){
    const q = state.query.trim().toLowerCase();
    list = list.filter(p=> (p.name+p.brand+p.category+p.desc).toLowerCase().includes(q));
  }
  switch(state.sort){
    case 'price-asc': list.sort((a,b)=>a.price-b.price); break;
    case 'price-desc': list.sort((a,b)=>b.price-a.price); break;
    case 'az': list.sort((a,b)=>a.name.localeCompare(b.name)); break;
    case 'brand': list.sort((a,b)=>a.brand.localeCompare(b.brand)); break;
    case 'category': list.sort((a,b)=>a.category.localeCompare(b.category)); break;
  }
  return list;
}

/* ===================== SVG UI ICONS ===================== */
const UI = {
  search:`<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  cart:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  menu:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>`,
  heart:(f)=>`<svg width="16" height="16" viewBox="0 0 24 24" fill="${f?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>`,
  zoom:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  close:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  back:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  whatsapp:`<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s1 2.5 1.1 2.6c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.2 1 .9-3.1-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>`,
  plus:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  minus:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  bag:`<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  grid:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  home:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
  emptybag:`<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  search52:`<svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`
};

/* ===================== RENDER: CARDS ===================== */
function cardHtml(p){
  const fav = state.favorites.has(p.id);
  return `
  <div class="card">
    <div class="card-media" onclick="openProduct(${p.id})">
      ${p.badge?`<span class="card-badge ${p.badge}">${p.badge==='bestseller'?'Mais vendido':p.badge==='premium'?'Premium':'Novo'}</span>`:''}
      <button class="fav-btn ${fav?'active':''}" onclick="toggleFav(${p.id},event)">${UI.heart(fav)}</button>
      ${mediaHtml(p)}
      <span class="zoom-hint" onclick="event.stopPropagation(); openLightbox(${p.id})">${UI.zoom}</span>
    </div>
    <div class="card-body">
      <div class="card-brand">${p.brand}</div>
      <h3 class="card-name">${p.name}</h3>
      <div class="card-cat">${p.category}${p.ml?' · '+p.ml:''}</div>
      <div class="card-price">${fmt(p.price)}</div>
      <div class="card-actions">
        <button class="btn btn-outline" onclick="openProduct(${p.id})">Detalhes</button>
        <button class="btn btn-gold" onclick="addToCart(${p.id})">Adicionar</button>
      </div>
    </div>
  </div>`;
}

function renderProductsOnly(){
  const grid = document.getElementById('mainGrid');
  const list = getFiltered();
  if(!grid) return;
  if(list.length===0){
    grid.outerHTML = `<div class="empty-state" id="mainGrid" style="grid-column:1/-1;">
      ${UI.search52}
      <h3>Nenhum produto encontrado</h3>
      <p>Tente buscar por outro nome, marca ou categoria.</p>
    </div>`;
  } else {
    grid.innerHTML = list.map(cardHtml).join('');
    grid.className = 'grid';
  }
  const countEl = document.getElementById('resultCount');
  if(countEl) countEl.textContent = `${list.length} produto${list.length!==1?'s':''}`;
}

/* ===================== RENDER: HOME ===================== */
function homeHtml(){
  const filtered = getFiltered();
  return `
  <section class="hero">
    <div class="hero-ring"><div class="logo-mark"><span>R</span></div></div>
    <h1>RBeauty<br>Imports</h1>
    <p class="sub">Cosméticos importados Premium</p>
    <div class="hero-cta">
      <button class="btn btn-gold btn-block" onclick="document.getElementById('catalogo').scrollIntoView({behavior:'smooth'})">Ver produtos</button>
      
    </div>
  </section>

  <section class="section" style="padding-top:26px;">
    <div class="hscroll" style="padding:0 20px;">
      <button class="chip ${state.category==='all'?'active':''}" onclick="setCategory('all')">Todas</button>
      ${CATEGORIES.map(c=>`<button class="chip ${state.category===c?'active':''}" onclick="setCategory('${c.replace(/'/g,"\\'")}')">${c}</button>`).join('')}
    </div>
  </section>

  <section class="section" id="catalogo">
    <div class="section-head">
      <div><p class="eyebrow">Catálogo completo</p><h2 class="section-title">Todos os produtos</h2></div>
    </div>
    <div class="toolbar">
      <span id="resultCount" style="font-size:12.5px; color:var(--ink-soft); font-weight:600;">${filtered.length} produtos</span>
      <div style="display:flex; gap:8px;">
        <div class="select-wrap">
          <select onchange="setBrandFilter(this.value)">
            <option value="all" ${state.brand==='all'?'selected':''}>Todas as marcas</option>
            ${BRANDS.map(b=>`<option value="${b}" ${state.brand===b?'selected':''}>${b}</option>`).join('')}
          </select>
        </div>
        <div class="select-wrap">
          <select onchange="setSort(this.value)">
            <option value="relevance" ${state.sort==='relevance'?'selected':''}>Relevância</option>
            <option value="price-asc" ${state.sort==='price-asc'?'selected':''}>Menor preço</option>
            <option value="price-desc" ${state.sort==='price-desc'?'selected':''}>Maior preço</option>
            <option value="az" ${state.sort==='az'?'selected':''}>A-Z</option>
            <option value="brand" ${state.sort==='brand'?'selected':''}>Marca</option>
            <option value="category" ${state.sort==='category'?'selected':''}>Categoria</option>
          </select>
        </div>
      </div>
    </div>
    ${filtered.length===0 ? `
      <div class="empty-state" id="mainGrid">
        ${UI.search52}
        <h3>Nenhum produto encontrado</h3>
        <p>Tente buscar por outro nome, marca ou categoria.</p>
      </div>` : `
      <div class="grid" id="mainGrid">${filtered.map(cardHtml).join('')}</div>`}
  </section>

  ${footerHtml()}
  `;
}

function footerHtml(){
  return `
  <footer>
    <div class="footer-inner">
      <div>
        <div class="footer-logo">
          <div class="logo-mark"><span>R</span></div>
          <div class="logo-text">RBeauty Imports<small>Cosméticos importados premium</small></div>
        </div>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>Contato</h4>
          <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">WhatsApp (99) 99228-2510</a>
          <a href="https://instagram.com/rbeauty.imports" target="_blank">@rbeauty.imports</a>
        </div>
        <div class="footer-col">
          <h4>Categorias</h4>
          ${CATEGORIES.slice(0,5).map(c=>`<a href="#" onclick="setCategory('${c.replace(/'/g,"\\'")}'); document.getElementById('catalogo')?.scrollIntoView(); return false;">${c}</a>`).join('')}
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} RBeauty Imports. Todos os direitos reservados.</span>
        <span>Cosméticos importados premium.</span>
      </div>
    </div>
  </footer>`;
}

/* ===================== RENDER: PRODUCT PAGE ===================== */
function productHtml(){
  const p = findProduct(state.productId);
  if(!p) return '';
  const related = PRODUCTS.filter(r=>r.id!==p.id && (r.brand===p.brand || r.category===p.category)).slice(0,8);
  const cartItem = state.cart.find(c=>c.id===p.id);
  const qty = cartItem ? cartItem.qty : 1;
  const fav = state.favorites.has(p.id);
  return `
  <div class="pdp-overlay" onclick="if(event.target===this) closeProduct()">
    <div class="pdp-inner">
      <div class="pdp-topbar">
        <button class="icon-btn" style="background:rgba(255,255,255,.7);" onclick="closeProduct()">${UI.back}</button>
        <button class="icon-btn ${fav?'active':''}" style="background:rgba(255,255,255,.7); color:${fav?'#b23b4e':'inherit'}" onclick="toggleFav(${p.id})">${UI.heart(fav)}</button>
      </div>
      <div>
        <div class="pdp-gallery" onclick="openLightbox(${p.id})">
          ${p.badge?`<span class="card-badge ${p.badge}" style="left:14px; top:14px;">${p.badge==='bestseller'?'Mais vendido':p.badge==='premium'?'Premium':'Novo'}</span>`:''}
          ${mediaHtmlFull(p, state.galleryIdx)}
        </div>
        <div class="pdp-dots">
          ${Array.from({length:productGalleryCount(p)},(_,i)=>i).map(i=>`<button class="${state.galleryIdx===i?'active':''}" onclick="event.stopPropagation(); state.galleryIdx=${i}; render();"></button>`).join('')}
        </div>
      </div>
      <div class="pdp-body">
        <div class="pdp-brand">${p.brand}</div>
        <h1 class="pdp-name">${p.name}</h1>
        <div class="pdp-meta">
          <span class="tag">${p.category}</span>
          ${p.ml?`<span class="tag">${p.ml}</span>`:''}
        </div>
        <div class="pdp-price">${fmt(p.price)}</div>
        <p class="pdp-desc">${p.desc}</p>

        <div class="pdp-qty-row">
          <span class="label">Quantidade</span>
          <div class="qty-stepper">
            <button onclick="changeDetailQty(-1)">${UI.minus}</button>
            <span id="detailQty">${qty}</span>
            <button onclick="changeDetailQty(1)">${UI.plus}</button>
          </div>
        </div>
        <div class="pdp-actions">
          <button class="btn btn-dark btn-block" onclick="addDetailToCart(${p.id})">Adicionar ao carrinho</button>
          <button class="btn btn-gold btn-block" onclick="whatsappCheckout({id:${p.id}, qty:parseInt(document.getElementById('detailQty').textContent)})">${UI.whatsapp} Comprar pelo WhatsApp</button>
        </div>

        ${related.length? `
        <div class="related-row">
          <h3 class="related-title">Você também pode gostar</h3>
          <div class="rel-scroll">
            ${related.map(r=>`
              <div class="rel-card" onclick="openProduct(${r.id})" style="cursor:pointer;">
                <div class="media">${mediaHtml(r)}</div>
                <div class="info">
                  <div style="font-size:9.5px; font-weight:800; color:var(--gold-deep); text-transform:uppercase; letter-spacing:.06em;">${r.brand}</div>
                  <div class="name">${r.name}</div>
                  <div class="price">${fmt(r.price)}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>` : ''}
      </div>
    </div>
  </div>`;
}
let detailQtyVal = 1;
function changeDetailQty(delta){
  const el = document.getElementById('detailQty');
  let v = parseInt(el.textContent) + delta;
  if(v<1) v=1;
  el.textContent = v;
}
function addDetailToCart(id){
  const qty = parseInt(document.getElementById('detailQty').textContent);
  addToCart(id, qty);
}

/* ===================== RENDER: CART DRAWER ===================== */
function cartDrawerHtml(){
  return `
  <div id="cartDrawer" class="drawer ${state.cartOpen?'show':''}">
    <div class="drawer-head">
      <h3>Seu carrinho</h3>
      <button class="icon-btn" onclick="closeCart()">${UI.close}</button>
    </div>
    <div class="drawer-body">
      ${state.cart.length===0? `
        <div class="cart-empty">
          ${UI.emptybag}
          <h3 style="font-family:var(--font-display); font-size:18px; color:var(--ink); margin:0 0 6px;">Carrinho vazio</h3>
          <p style="font-size:13.5px;">Adicione produtos para começar seu pedido.</p>
        </div>` :
        state.cart.map(c=>{
          const p = findProduct(c.id);
          return `
          <div class="cart-item">
            <div class="cart-item-media">${mediaHtml(p)}</div>
            <div class="cart-item-info">
              <div class="brand">${p.brand}</div>
              <div class="name">${p.name}</div>
              <div class="qty-stepper">
                <button onclick="updateQty(${p.id},-1)">${UI.minus}</button>
                <span>${c.qty}</span>
                <button onclick="updateQty(${p.id},1)">${UI.plus}</button>
              </div>
            </div>
            <div class="cart-item-right">
              <div class="cart-item-price">${fmt(p.price*c.qty)}</div>
              <button class="remove-btn" onclick="removeFromCart(${p.id})">Remover</button>
            </div>
          </div>`;
        }).join('')
      }
    </div>
    ${state.cart.length>0? `
    <div class="drawer-foot">
      <div class="total-row"><span class="label">Total</span><span class="value">${fmt(cartTotal())}</span></div>
      <button class="btn btn-outline btn-block" onclick="closeCart()">Continuar comprando</button>
      <button class="btn btn-gold btn-block" onclick="whatsappCheckout(null)">${UI.whatsapp} Finalizar no WhatsApp</button>
    </div>` : ''}
  </div>`;
}

/* ===================== RENDER: MENU DRAWER ===================== */
function menuDrawerHtml(){
  return `
  <div id="menuDrawer" class="menu-drawer ${state.menuOpen?'show':''}">
    <div class="menu-head">
      <div class="logo"><div class="logo-mark"><span>R</span></div><div class="logo-text">RBeauty<small>Imports</small></div></div>
      <button class="icon-btn" onclick="closeMenu()">${UI.close}</button>
    </div>
    <div class="menu-body">
      <button class="menu-item" onclick="closeMenu(); goHome();">${UI.home} Início</button>
      <button class="menu-item" onclick="closeMenu(); setCategory('all'); goHome(); setTimeout(()=>document.getElementById('catalogo')?.scrollIntoView(),50);">${UI.grid} Todos os produtos</button>
      <button class="menu-item" onclick="closeMenu(); showFavoritesView();">${UI.heart(false)} Favoritos <span class="count">${state.favorites.size}</span></button>
      <div class="menu-section"><h5>Categorias</h5></div>
      ${CATEGORIES.map(c=>`<button class="menu-item" onclick="closeMenu(); setCategory('${c.replace(/'/g,"\\'")}'); goHome(); setTimeout(()=>document.getElementById('catalogo')?.scrollIntoView(),50);"><span>${c}</span><span class="count">${PRODUCTS.filter(p=>p.category===c).length}</span></button>`).join('')}
      <div class="menu-section"><h5>Marcas</h5></div>
      ${BRANDS.map(b=>`<button class="menu-item" onclick="closeMenu(); setBrandFilter('${b}'); goHome(); setTimeout(()=>document.getElementById('catalogo')?.scrollIntoView(),50);"><span>${b}</span><span class="count">${PRODUCTS.filter(p=>p.brand===b).length}</span></button>`).join('')}
      <div class="menu-section"><h5>Contato</h5></div>
      <a class="menu-item" href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">WhatsApp</a>
      <a class="menu-item" href="https://instagram.com/rbeauty.imports" target="_blank">@rbeauty.imports</a>
    </div>
  </div>`;
}
function showFavoritesView(){
  state.category='all'; state.brand='all'; state.query='';
  goHome();
  setTimeout(()=>{
    const grid = document.getElementById('mainGrid');
    const list = PRODUCTS.filter(p=>state.favorites.has(p.id));
    if(grid){
      if(list.length===0){
        grid.outerHTML = `<div class="empty-state" id="mainGrid" style="grid-column:1/-1;">${UI.heart(false)}<h3 style="margin-top:14px;">Nenhum favorito ainda</h3><p>Toque no coração dos produtos para salvá-los aqui.</p></div>`;
      } else {
        grid.innerHTML = list.map(cardHtml).join('');
      }
    }
    document.getElementById('catalogo')?.scrollIntoView();
  }, 60);
}

/* ===================== RENDER: LIGHTBOX & TOAST ===================== */
function lightboxHtml(){
  if(!state.lightbox) return '';
  const p = findProduct(state.lightbox);
  return `
  <div id="lightbox" class="lightbox" onclick="if(event.target===this) closeLightbox()">
    <button class="lightbox-close" onclick="closeLightbox()">${UI.close}</button>
    ${productImage(p) ? mediaHtml(p) : iconSvg(p.category, 'style="color:var(--gold)"')}
    <div class="lightbox-hint">${p.brand} · ${p.name}</div>
  </div>`;
}
function toastHtml(){
  if(!state.toastMsg) return '';
  return `<div id="toast" class="toast">✓ ${state.toastMsg.replace('✓','').trim()}</div>`;
}

/* ===================== HEADER + BOTTOM NAV ===================== */
function headerHtml(){
  return `
  <header class="topbar" id="topbar">
    <div class="topbar-inner">
      <div class="logo" onclick="goHome()">
        <div class="logo-mark"><span>R</span></div>
        <div class="logo-text">RBeauty<small>Imports</small></div>
      </div>
      <div class="topbar-actions">
        <button class="icon-btn" onclick="toggleSearch()">${UI.search}</button>
        <button class="icon-btn" onclick="openCart()">${UI.cart}${cartCount()>0?`<span class="badge-count">${cartCount()}</span>`:''}</button>
        <button class="icon-btn" onclick="openMenu()">${UI.menu}</button>
      </div>
    </div>
    <div class="search-bar-wrap ${state.searchOpen?'open':''}">
      <div class="search-bar">
        ${UI.search}
        <input id="searchInput" type="text" placeholder="Buscar por nome, marca ou categoria..." value="${state.query}" oninput="setQuery(this.value)">
      </div>
    </div>
  </header>`;
}
function bottomNavHtml(){
  return `
  <nav class="bottom-nav">
    <button class="${state.view==='home'?'active':''}" onclick="goHome()">${UI.home}Início</button>
    <button onclick="toggleSearch(); document.getElementById('catalogo')?.scrollIntoView();">${UI.search}Buscar</button>
    <button onclick="openCart()">${UI.bag}Carrinho${cartCount()>0?` (${cartCount()})`:''}</button>
    <button onclick="openMenu()">${UI.menu}Menu</button>
  </nav>`;
}

/* ===================== MAIN RENDER ===================== */
function render(){
  const scrollY = window.scrollY;
  const app = document.getElementById('app');
  app.innerHTML = `
    ${headerHtml()}
    <main style="flex:1;">
      ${state.view==='home' ? homeHtml() : ''}
    </main>
    ${state.view==='home' ? bottomNavHtml() : ''}
    ${state.view==='product' ? productHtml() : ''}
    <div id="overlay" class="overlay ${state.cartOpen?'show':''}" onclick="closeCart()"></div>
    ${cartDrawerHtml()}
    <div id="overlay2" class="overlay ${state.menuOpen?'show':''}" onclick="closeMenu()"></div>
    ${menuDrawerHtml()}
    ${lightboxHtml()}
    ${toastHtml()}
  `;
  if(state.view==='product') requestAnimationFrame(()=>document.querySelector('.pdp-overlay')?.classList.add('show'));
  if(state.cartOpen) requestAnimationFrame(()=>document.getElementById('cartDrawer')?.classList.add('show'));
  if(state.menuOpen) requestAnimationFrame(()=>document.getElementById('menuDrawer')?.classList.add('show'));
  if(state.lightbox) requestAnimationFrame(()=>document.getElementById('lightbox')?.classList.add('show'));
  if(state.toastMsg) requestAnimationFrame(()=>document.getElementById('toast')?.classList.add('show'));
  window.scrollTo(0, scrollY);
}

window.addEventListener('scroll', ()=>{
  document.getElementById('topbar')?.classList.toggle('scrolled', window.scrollY>4);
});

render();