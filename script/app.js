/* ===================== CONFIG ===================== */
const WHATSAPP_NUMBER = "5599992282510";

// Preencha com os dados do seu projeto Supabase (Project Settings > API).
// Essas duas informações são públicas e seguras para ficar no código do site.
const SUPABASE_URL = "https://kzqnmhshskrxquvfywyd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6cW5taHNoc2tyeHF1dmZ5d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1NTM4NTEsImV4cCI6MjEwMzEyOTg1MX0.mHAo4P3r0c6E1HeaSAPZMEDtGyKoPQAa8bJDbVCOlaM";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* ===================== DATA (fallback) =====================
   Este array só é usado se o site não conseguir se conectar ao
   Supabase (ex: internet fora do ar). Os produtos reais agora
   são gerenciados pelo painel admin.html.
   =================================================================== */
const FALLBACK_PRODUCTS = [
{name:"Zero Pore Pad",brand:"MEDICUBE",ml:"70 pads",category:"Pads",price:209.00,images:['assets/medicube/medicube-zero-pore-pad.jpg'],
 desc:"Pads de esfoliação dupla com AHA e BHA que removem células mortas, desobstroem os poros e controlam a oleosidade. Ajudam a reduzir cravos, suavizar a textura da pele e minimizar a aparência dos poros. Indicados principalmente para peles mistas, oleosas e com tendência a acne."},
{name:"PDRN Pink Peptide Serum",brand:"MEDICUBE",ml:"30ml",category:"Séruns",price:199.00,images:['assets/medicube/medicube-serum-peptide.jpg'],
 desc:"Sérum coreano com PDRN (DNA de salmão) e peptídeos, desenvolvido para hidratar profundamente, melhorar a elasticidade e fortalecer a barreira cutânea. Auxilia na suavização de linhas finas e proporciona uma pele mais firme, luminosa e saudável. Indicado para todos os tipos de pele."},
{name:"PDRN 99% Salmon Ampoule",brand:"MEDICUBE",ml:null,category:"Séruns",price:159.00,images:['assets/medicube/medicube-ampoule.jpg'],
 desc:"Ampoule coreana altamente concentrada em PDRN (DNA de salmão), ativo conhecido por favorecer a regeneração e recuperação da pele. Proporciona hidratação intensa, melhora a firmeza e ajuda a reduzir sinais de cansaço. Ideal para peles secas, sensibilizadas ou com sinais de envelhecimento."},
{name:"Collagen Night Wrapping Mask",brand:"MEDICUBE",ml:"75ml",category:"Máscaras",price:199.00,images:['assets/medicube/medicube-collagen-night.jpg'],
 desc:"Máscara facial noturna coreana enriquecida com colágeno, desenvolvida para hidratar profundamente enquanto a pele descansa. Forma uma película que ajuda a potencializar a ação dos ativos, deixando a pele mais firme, macia e revitalizada ao acordar. Indicada para todos os tipos de pele."},
{name:"PDRN Pink Vita Coating Mask",brand:"MEDICUBE",ml:null,category:"Máscaras",price:39.00,images:['assets/medicube/coating-mask.jpg'],
 desc:"Máscara facial coreana com PDRN e vitaminas, criada para hidratar, revitalizar e devolver luminosidade à pele opaca. Ajuda a fortalecer a barreira cutânea e proporciona efeito glow imediato, deixando a pele mais uniforme e saudável. Indicada para todos os tipos de pele."},
{name:"Deep Vita C Capsule Cream",brand:"MEDICUBE",ml:"55g",category:"Hidratantes",price:209.00,images:['assets/medicube/capsule-cream.webp'],
 desc:"Creme hidratante coreano com cápsulas de vitamina C que se rompem durante a aplicação, oferecendo ação antioxidante e iluminadora. Combina 50% de água de espinheiro-marítimo, 5% de niacinamida e vitaminas que auxiliam na redução da aparência de manchas, uniformizam o tom da pele e promovem hidratação duradoura. Indicado para todos os tipos de pele, especialmente as com manchas e falta de viço."},
{name:"TXA Niacinamide Capsule Cream",brand:"MEDICUBE",ml:"55g",category:"Hidratantes",price:209.00,images:['assets/medicube/niacinamide-capsule-cream.webp'],
 desc:"Creme hidratante coreano formulado com Ácido Tranexâmico (TXA) e Niacinamida, ativos reconhecidos por auxiliar no clareamento de manchas e uniformização da pele. Também ajuda a controlar a oleosidade e fortalecer a barreira cutânea. Ideal para peles com hiperpigmentação ou marcas de acne."},
{name:"PDRN Pink Collagen Capsule Cream",brand:"MEDICUBE",ml:"55g",category:"Hidratantes",price:209.00,images:['assets/medicube/medicube-capsule-cream.jpg'],
 desc:"Hidratante coreano que combina PDRN e colágeno para promover hidratação intensa, firmeza e elasticidade. Auxilia na redução da aparência de linhas finas e proporciona uma pele mais preenchida e viçosa. Indicado para todos os tipos de pele, especialmente aquelas com manchas, tom irregular ou sinais de envelhecimento."},
{name:"PDRN Pink Collagen Exosome Shot 2000",brand:"MEDICUBE",ml:"30ml",category:"Tratamentos Intensivos",price:209.00,badge:"premium",images:['assets/medicube/medicube-shot-2000.jpg'],
 desc:"Tratamento intensivo coreano que associa PDRN, colágeno e exossomos. Promove renovação da pele, melhora a firmeza e auxilia na redução dos sinais de envelhecimento. Sua tecnologia utiliza microagulhas cosméticas (espículas) de origem mineral que potencializam a absorção dos ativos nas camadas mais profundas. Indicado para peles com perda de elasticidade."},
{name:"One Day Exosome Shot 7500",brand:"MEDICUBE",ml:"30ml",category:"Tratamentos Intensivos",price:209.00,badge:"premium",images:['assets/medicube/one-day-exosome.avif'],
 desc:"Tratamento intensivo coreano que combina microespículas de origem mineral, exossomos e os ácidos AHA, BHA e PHA para promover uma renovação da pele semelhante ao efeito de um microagulhamento líquido. As microespículas ajudam a potencializar a absorção dos ativos, enquanto os ácidos refinam a textura e os poros. Deve ser utilizado à noite; é normal sentir uma leve sensação de pinicamento durante a aplicação."},
{name:"Jelly Brush",brand:"MEDICUBE",ml:"espátula de silicone",category:"Acessórios de Skincare",price:69.00,images:['assets/medicube/jelly-brush.jpg'],
 desc:"Acessório desenvolvido para aplicar máscaras faciais e cremes de forma uniforme e higiênica. O silicone flexível evita desperdícios, reduz o contato das mãos com o produto e facilita a aplicação em todas as áreas do rosto."},
{name:"Age-R Booster Pro",brand:"MEDICUBE",ml:null,category:"Aparelhos de Skincare",price:1299.00,badge:"premium",images:['assets/medicube/booster-pro.jpg'],
 desc:"Dispositivo de skincare desenvolvido para potencializar a absorção dos cosméticos por meio de tecnologias avançadas, tornando a rotina de cuidados mais eficaz."},
{name:"Age-R Booster Mini",brand:"MEDICUBE",ml:null,category:"Aparelhos de Skincare",price:999.00,badge:"premium",images:['assets/medicube/booster-mini.jpg'],
 desc:"Versão compacta do famoso Age-R Booster Pro, ideal para quem busca praticidade sem abrir mão da tecnologia. Auxilia na absorção dos produtos aplicados na pele."},
{name:"Retinal Shot",brand:"CELIMAX",ml:"15ml",category:"Tratamentos Intensivos",price:199.00,badge:"bestseller",images:['assets/celimax/retinal-shot.avif'],
 desc:"O tratamento antienvelhecimento mais famoso da marca coreana Celimax, formulado com retinal e tecnologia de microespículas que potencializa a absorção dos ativos. Auxilia na renovação celular, melhora a firmeza da pele, suaviza linhas finas e rugas e refina a textura e a aparência dos poros. Indicado para peles com sinais de envelhecimento ou textura irregular."},
{name:"Retinol Shot Tightening Serum",brand:"CELIMAX",ml:"30ml",category:"Séruns",price:179.00,images:['assets/celimax/shot-tightening.avif'],
 desc:"Sérum coreano com retinol, desenvolvido para melhorar a firmeza da pele, suavizar rugas e estimular a renovação celular. Também auxilia na uniformização da textura e no controle da oleosidade. Indicado para peles maduras e para quem deseja prevenir os primeiros sinais da idade."},
{name:"Pore + Dark Spot Brightening Cream",brand:"CELIMAX",ml:"35ml",category:"Hidratantes",price:189.00,images:['assets/celimax/dark-spot.jpg'],
 desc:"Creme hidratante coreano multifuncional formulado para auxiliar na redução de manchas e marcas de acne, uniformizar o tom da pele e melhorar a aparência da textura e dos poros."},
{name:"Madagascar Centella Ampoule",brand:"SKIN1004",ml:"55ml",category:"Séruns",price:189.00,badge:"bestseller",images:['assets/skin1004/skin1004-centella-55ml.jpg'],
 desc:"Ampoule facial coreana formulada com extrato puro de Centella Asiática, conhecida por sua ação calmante e reparadora. Ajuda a reduzir irritações, vermelhidão, oleosidade e o ressecamento, enquanto hidrata profundamente e fortalece a barreira cutânea. Indicada para todos os tipos de pele, especialmente as sensíveis."},
{name:"Madagascar Centella Tea-Trica Ampoule",brand:"SKIN1004",ml:"100ml",category:"Séruns",price:229.00,images:['assets/skin1004/centella-tea.avif'],
 desc:"Ampoule coreana que combina Centella Asiática, complexo Tea-Trica e ativos calmantes para controlar a oleosidade e aliviar peles com tendência à acne. Ajuda a reduzir vermelhidão, fortalecer a barreira cutânea e equilibrar a pele. Indicada para peles oleosas, acneicas e sensíveis."},
{name:"Madagascar Centella Tone Brightening Capsule Ampoule",brand:"SKIN1004",ml:"100ml",category:"Séruns",price:230.00,images:['assets/skin1004/centella-tone-brightening.jpg'],
 desc:"Ampoule coreana formulada com Centella Asiática, Niacinamida e cápsulas iluminadoras, desenvolvida para hidratar, uniformizar o tom da pele e reduzir a aparência de manchas. Deixa a pele mais luminosa e saudável sem causar irritação. Indicada para todos os tipos de pele."},
{name:"Madagascar Centella Light Cleansing Oil",brand:"SKIN1004",ml:"200ml",category:"Limpeza Facial",price:199.00,images:['assets/skin1004/centella-light-cleansing-oil.webp'],
 desc:"Óleo de limpeza facial coreano que remove maquiagem, protetor solar e impurezas sem ressecar a pele. Formulado com Centella Asiática e óleos vegetais leves, limpa profundamente enquanto preserva a hidratação natural da pele. Indicado para todos os tipos de pele."},
{name:"Kit Madagascar Centella Travel",brand:"SKIN1004",ml:null,category:"Kits",price:319.00,badge:"new",images:['assets/skin1004/centella-travel.jfif'],
 desc:"Kit coreano com os principais produtos da linha Madagascar Centella, ideal para conhecer a marca ou levar em viagens. Reúne itens para limpeza, hidratação e cuidado calmante, proporcionando uma rotina completa para fortalecer a barreira cutânea. Indicado para todos os tipos de pele."},
{name:"No. 9 NAD+ Retinol Volumetox Eye Cream",brand:"NUMBUZIN",ml:"10ml",category:"Área dos Olhos",price:229.00,badge:"bestseller",images:['assets/numbuzin/retinol-volumetox.webp'],
 desc:"Um dos produtos mais icônicos da marca coreana Numbuzin. Creme antienvelhecimento para a área dos olhos formulado com NAD+, retinol e peptídeos, desenvolvido para reduzir linhas de expressão e rugas (pés de galinha), melhorar a firmeza da pele e minimizar bolsas e olheiras. Proporciona hidratação e aparência mais descansada. Indicado para todos os tipos de pele."},
{name:"No. 9 NAD+ Bio Lifting Essence",brand:"NUMBUZIN",ml:"50ml",category:"Essências",price:299.00,badge:"bestseller",images:['assets/numbuzin/bio-lifting.webp'],
 desc:"Essência mais famosa da marca coreana Numbuzin, enriquecida com NAD+, peptídeos e ativos firmadores, promove o efeito glass skin ao melhorar a elasticidade, a firmeza e a hidratação da pele. Também auxilia na redução de linhas finas, proporcionando uma aparência mais viçosa, luminosa e revitalizada."},
{name:"Niacinamide 10% + TXA 4% Serum",brand:"ANUA",ml:"30ml",category:"Séruns",price:249.00,images:['assets/anua/niacinamide.webp'],
 desc:"Sérum coreano com textura aquosa e rápida absorção, formulado com 10% de Niacinamida e 4% de Ácido Tranexâmico (TXA) focado na redução de manchas, marcas de acne e hiperpigmentação. Também ajuda a controlar a oleosidade e uniformizar o tom da pele. Indicado para todos os tipos de pele, especialmente as com tom irregular."},
{name:"345 Relief Cream",brand:"DR. ALTHEA",ml:"50ml",category:"Hidratantes",price:249.00,images:['assets/dr-althea/dr-althea-relief-cream.jpg'],
 desc:"Hidratante coreano com textura gel-creme, desenvolvido para hidratar, acalmar e fortalecer a barreira cutânea. Sua fórmula leve proporciona conforto sem pesar, sendo ideal para peles oleosas, acneicas, sensíveis, pós-ácidos e pós-retinal."},
{name:"Vitamin C Boosting Serum",brand:"DR. ALTHEA",ml:"30ml",category:"Séruns",price:199.00,images:['assets/dr-althea/dr-althea-vitamin-c.avif'],
 desc:"Sérum coreano formulado com 63% de extrato de espinheiro-amarelo, naturalmente rico em vitamina C. Ajuda a iluminar a pele, reduzir a aparência de manchas e marcas de acne, uniformizar o tom e oferecer ação antioxidante, enquanto promove hidratação e uma aparência mais radiante."},
{name:"Airy Sunstick / Quick Sunstick",brand:"ABIB",ml:"23g",category:"Protetor Solar",price:189.00,badge:"bestseller",images:['assets/abib/abib-quick.jpg'],
 desc:"Protetor solar em bastão, queridinho da beleza coreana, com alta proteção contra os raios UVA e UVB. Ajuda a controlar a oleosidade e é fácil de reaplicar ao longo do dia, inclusive sobre a maquiagem, sem borrá-la. São duas versões com propostas totalmente diferentes. A versão Airy Sunstick tem acabamento matte, aveludado e controla a oleosidade (ideal para peles oleosas). A versão Quick Sunstick traz um acabamento glow, que hidrata a pele e deixa um viço lindo (ideal para pele normal a seca)."},
{name:"PDRN Reedle Shot Eye Lifter",brand:"VT COSMETICS",ml:"15ml",category:"Área dos Olhos",price:289.00,badge:"premium",images:['assets/vt-cosmetics/vt-cosmetics-reedle-shot.webp'],
 desc:"Tratamento coreano para a área dos olhos que combina PDRN e a exclusiva tecnologia Reedle Shot, com microespículas de origem mineral que potencializam a absorção dos ativos. Auxilia na melhora da firmeza, suaviza linhas finas, reduz os sinais de cansaço e proporciona hidratação intensa, deixando o olhar mais revitalizado e iluminado. Durante a aplicação é comum sentir um leve formigamento causado pelas microespículas."},
{name:"Dark Spot Correcting Glow Serum",brand:"AXIS-Y",ml:"50ml",category:"Séruns",price:189.00,images:['assets/axis-y/serum-facial-axis-y.webp'],
 desc:"Sérum clareador da marca coreana AXIS-Y, enriquecido com 5% de Niacinamida e Esqualano. Ajuda a uniformizar o tom da pele, suavizar manchas, melasma e marcas de acne, além de promover hidratação sem pesar e um acabamento naturalmente iluminado. Indicado para todos os tipos de pele."},
{name:"Grow: Turn Exosome Brush Ampoule",brand:"LILYEVE",ml:"100ml",category:"Cabelo",price:289.00,badge:"bestseller",images:['assets/lilyeve/lilyeve-grow-turn.jpg'],
 desc:"Tratamento capilar mais vendido da marca coreana Lilyeve, desenvolvido com exclusiva tecnologia de exossomos para fortalecer o couro cabeludo e revitalizar os fios desde a raiz. Sua fórmula ajuda a reduzir a queda, estimula um ambiente favorável ao crescimento saudável dos cabelos e melhora a densidade, a hidratação e o brilho. Indicado para todos os tipos de cabelo, especialmente os finos, enfraquecidos ou com queda."},
{name:"Grow:Turn Exosome Dual Lash Serum",brand:"LILYEVE",ml:null,category:"Cílios/Sobrancelhas",price:259.00,badge:"new",images:['assets/lilyeve/Lilyeve_Grow_Turn_Exosome.webp'],
 desc:"Sérum coreano enriquecido com exossomos e ativos fortalecedores, que promove cílios e sobrancelhas com aparência mais cheia, forte e saudável. Possui sistema Dual Care, com dois aplicadores exclusivos: um pincel para nutrir e proteger os fios durante o dia e um aplicador de precisão para revitalizar a raiz durante a noite."},
{name:"Premium Touch Hair Mask",brand:"FINO",ml:"230g",category:"Cabelo",price:169.00,images:['assets/fino/mascara_premium_touch_hair.webp'],
 desc:"A famosa máscara capilar japonesa reconhecida por promover um verdadeiro tratamento de salão em casa. Enriquecida com geleia real, PCA, Lipidure EX e esqualano, hidrata profundamente, repara os danos e devolve maciez, brilho e sedosidade aos fios. Ideal para cabelos secos, danificados, quimicamente tratados ou com frizz."},
{name:"Premium Touch Hair Oil",brand:"FINO",ml:"70ml",category:"Cabelo",price:169.00,images:['assets/fino/fino-touch-hair-oil.jpg'],
 desc:"O óleo capilar japonês mais famoso da linha Fino, desenvolvido para reparar, nutrir e proteger os fios sem pesar. Sua fórmula de textura leve hidrata profundamente, controla o frizz, sela as cutículas e proporciona brilho intenso e toque sedoso, além de ajudar a proteger os cabelos dos danos causados pelo calor. Ideal para cabelos secos, danificados ou quimicamente tratados."},
{name:"Tsubaki Premium EX Repair Mask",brand:"SHISEIDO",ml:"180g",category:"Cabelo",price:169.00,badge:"bestseller",images:['assets/shiseido/tsubaki_premium_repair_mask.webp'],
 desc:"Uma das máscaras capilares mais famosas do Japão, desenvolvida pela Shiseido para reparar profundamente cabelos secos e danificados. Sua fórmula com óleo de camélia (Tsubaki), proteínas e aminoácidos proporciona hidratação intensa, reduz o frizz, restaura a maciez e devolve brilho e sedosidade aos fios. Ideal para cabelos ressecados, quimicamente tratados ou danificados pelo calor."},
{name:"CER-100 Hair Muscle Essence Oil",brand:"ELIZAVECCA",ml:"100ml",category:"Cabelo",price:169.00,images:['assets/elizavecca/elizavecca-hair-muscle-essence-oil.webp'],
 desc:"Óleo capilar da marca coreana Elizavecca, formulado com colágeno hidrolisado, ceramidas e óleos nutritivos para hidratar e proteger os fios. Ajuda a controlar o frizz, reduzir as pontas duplas e proporcionar brilho intenso sem pesar. Indicado para cabelos secos, danificados e quimicamente tratados."},
{name:"Body Splash Victoria's Secret",brand:"VICTORIA'S SECRET",ml:"250ml",category:"Perfumes",price:159.00,images:['assets/victorias-secret/body-splash-victoria-secret.jpg'],
 desc:"Fragrâncias irresistíveis para deixar a pele perfumada o dia todo. Os Body Splashes Victoria's Secret possuem aromas marcantes, femininos e leves, perfeitos para o uso diário. Disponíveis em várias fragrâncias nas versões clássicas e Shimmer, que adicionam um brilho delicado à pele."},
{name:"Hidratante Victoria's Secret",brand:"VICTORIA'S SECRET",ml:"236ml",category:"Hidratantes",price:159.00,images:['assets/victorias-secret/hidratantes-victoria-secret.jpg'],
 desc:" Hidratação intensa com a mesma fragrância icônica dos Body Splashes Victoria's Secret. Sua fórmula deixa a pele macia, hidratada e delicadamente perfumada por muito mais tempo. As versões Shimmer proporcionam um brilho sofisticado, ideal para destacar a pele. Disponíveis em várias fragrâncias."},
{name:"Zero Pore Pad Mild",brand:"MEDICUBE",ml:"70 pads",category:"Pads",price:209.00,images:['assets/medicube/zero-pore-pad-mild.jpg'],
 desc:"Pad suave com Madecassoside, desenvolvido para controlar a oleosidade e cuidar dos poros sem agredir a pele. Ideal para peles sensíveis."},
{name:"Zero Pore Peel Pad Esfoliante",brand:"MEDICUBE",ml:"8 unidades",category:"Pads",price:179.00,images:['assets/medicube/zero-pore-peel-pad-esfoliante.jpg'],
 desc:"Pad esfoliante de ação intensiva que ajuda a remover células mortas, desobstruir os poros e melhorar a textura da pele. Ideal para poros dilatados, cravos e textura irregular."},
{name:"Deep Vita C Pad",brand:"MEDICUBE",ml:"70 pads",category:"Pads",price:239.00,images:['assets/medicube/deep-vita-c-pad.jpg'],
 desc:"Pads com Vitamina C para iluminar a pele, uniformizar o tom e proporcionar aparência mais radiante. Ideal para peles opacas, com manchas e tom irregular."},
{name:"Red Succinic Acid Peeling Pad",brand:"MEDICUBE",ml:"70 pads",category:"Pads",price:239.00,images:['assets/medicube/red-succinic-acid-peeling-pad.jpg'],
 desc:"Pad esfoliante com ácido succínico, niacinamida e panthenol, voltado para oleosidade, cravos e imperfeições. Ideal para peles mistas e oleosas/acneicas."},
{name:"Kojic Acid Turmeric Brightening Pad",brand:"MEDICUBE",ml:"70 pads",category:"Pads",price:239.00,images:['assets/medicube/kojic-acid-turmeric-brightening-pad.jpg'],
 desc:"Pads com ácido kójico e cúrcuma, focados em luminosidade e uniformização do tom. Ideal para peles com manchas, marcas e aparência opaca."},
{name:"Hyaluronic Multi Peptide Serum",brand:"MEDICUBE",ml:"30ml",category:"Séruns",price:229.00,images:['assets/medicube/hyaluronic-multi-peptide-serum.jpg'],
 desc:"Sérum hidratante com ácido hialurônico e peptídeos, que ajuda a manter a hidratação, melhorar a elasticidade e deixar a pele mais preenchida. Ideal para todos os tipos de pele, especialmente desidratadas."},
{name:"Azelaic Acid Serum",brand:"MEDICUBE",ml:"30ml",category:"Séruns",price:229.00,images:['assets/medicube/azelaic-acid-serum.jpg'],
 desc:"Sérum com 16% de ácido azelaico, desenvolvido para ajudar no controle da oleosidade, vermelhidão e imperfeições, além de uniformizar o tom. Ideal para peles oleosas, acneicas e sensíveis."},
{name:"Zero Pore One Day Serum",brand:"MEDICUBE",ml:"30ml",category:"Séruns",price:229.00,images:['assets/medicube/zero-pore-one-day-serum.jpg'],
 desc:"Sérum de tratamento com AHA + BHA + PHA, que promove esfoliação e ajuda a desobstruir os poros, controlar a oleosidade e melhorar a textura. Ideal para peles mistas e oleosas."},
{name:"EGF NAD+ Firming Serum",brand:"MEDICUBE",ml:"30ml",category:"Séruns",price:229.00,images:['assets/medicube/egf-nad-firming-serum.jpg'],
 desc:"Sérum focado em firmeza, elasticidade e aparência rejuvenescida, combinando ativos de cuidado antienvelhecimento. Ideal para peles maduras ou com perda de firmeza."},
{name:"Niacinamide Serum",brand:"MEDICUBE",ml:"30ml",category:"Séruns",price:229.00,images:['assets/medicube/kojic-acid-turmeric-niacinamide-serum2.jpg'],
 desc:"Sérum com niacinamida para auxiliar no controle da oleosidade, aparência dos poros e uniformização do tom. Ideal para peles mistas, oleosas e com marcas."},
{name:"Cica Exosome Serum",brand:"MEDICUBE",ml:"30ml",category:"Séruns",price:209.00,images:['assets/medicube/cica-exosome-serum.jpg'],
 desc:"Sérum calmante com Cica e exossomos, desenvolvido para fortalecer a barreira, reduzir sinais de sensibilidade e proporcionar hidratação. Ideal para peles sensíveis, sensibilizadas ou ressecadas."},
{name:"Kojic Acid Turmeric Niacinamide Serum",brand:"MEDICUBE",ml:"30ml",category:"Séruns",price:229.00,images:['assets/medicube/kojic-acid-turmeric-niacinamide-serum.jpg'],
 desc:"Sérum iluminador com ácido kójico, cúrcuma e niacinamida, que auxilia na uniformização do tom e na aparência de manchas e marcas. Ideal para peles com hiperpigmentação e tom irregular."},
{name:"Máscara Facial PDRN Pink Collagen Gel Mask",brand:"MEDICUBE",ml:"1 unidade",category:"Máscaras",price:65.00,images:['assets/medicube/mascara-facial-pdrn-pink-collagen-gel-mask.jpg'],
 desc:"Máscara em gel com PDRN e colágeno, que proporciona hidratação intensa e deixa a pele com aparência mais firme, preenchida e luminosa. Ideal para todos os tipos de pele."},
{name:"PDRN Pink Caffeine Night Wrapping Mask",brand:"MEDICUBE",ml:"75ml",category:"Máscaras",price:219.00,images:['assets/medicube/pdrn-pink-caffeine-night-wrapping-mask.jpg'],
 desc:"Máscara noturna com PDRN e cafeína, desenvolvida para hidratar, revitalizar e melhorar a aparência de pele cansada. Ideal para peles opacas e desidratadas."},
{name:"Zero Pore Blackhead Mud Mask",brand:"MEDICUBE",ml:"100g",category:"Máscaras",price:199.00,images:['assets/medicube/zero-pore-blackhead-mud-mask.jpg'],
 desc:"Máscara de argila para cravos, poros e oleosidade. Promove limpeza profunda, ajuda a desobstruir os poros e remove impurezas sem ressecar. Com argila mineral + AHA e BHA, auxilia no controle da oleosidade e na renovação suave da pele. Ideal para peles mistas e oleosas."},
{name:"Kojic Acid Turmeric Night Wrapping Mask",brand:"MEDICUBE",ml:"75ml",category:"Máscaras",price:209.00,images:['assets/medicube/kojic-acid-turmeric-night-wrapping-mask.jpg'],
 desc:"Máscara noturna com ácido kójico e cúrcuma, focada em luminosidade e uniformização do tom. Ideal para peles com manchas e aparência opaca."},
{name:"Máscara Facial Kojic Acid Turmeric Brightening Gel",brand:"MEDICUBE",ml:"1 unidade",category:"Máscaras",price:65.00,images:['assets/medicube/mascara-facial-kojic-acid-turmeric-brightening-gel.jpg'],
 desc:"Máscara em gel com ação iluminadora, desenvolvida para melhorar a aparência do tom e proporcionar um efeito de pele mais radiante. Ideal para peles opacas e com tom irregular."},
{name:"Triple Collagen Cream",brand:"MEDICUBE",ml:"50ml",category:"Hidratantes",price:219.00,images:['assets/medicube/triple-collagen-cream.jpg'],
 desc:"Creme hidratante anti-idade com triplo colágeno desenvolvido para melhorar firmeza, elasticidade e suavizar linhas finas. Hidratação profunda sem pesar. Indicado para todos os tipos de pele, inclusive maduras."},
{name:"Hyaluronic Moisturizing Capsule Cream",brand:"MEDICUBE",ml:"55g",category:"Hidratantes",price:239.00,images:['assets/medicube/hyaluronic-moisturizing-capsule-cream.jpg'],
 desc:"Creme hidratante com ácido hialurônico, desenvolvido para repor a hidratação e deixar a pele macia, viçosa e preenchida. Ideal para peles secas e desidratadas."},
{name:"Kojic Acid Turmeric Vita Capsule Cream",brand:"MEDICUBE",ml:"53g",category:"Hidratantes",price:239.00,images:['assets/medicube/kojic-acid-turmeric-vita-capsule-cream.jpg'],
 desc:"Creme hidratante com ácido kójico, cúrcuma e ativos vitamínicos, focado em luminosidade e uniformização do tom. Ideal para peles com manchas e aspecto opaco."},
{name:"PDRN Pink Hyaluronic Moisturizing Cream",brand:"MEDICUBE",ml:"50ml",category:"Hidratantes",price:219.00,images:['assets/medicube/pdrn-pink-hyaluronic-moisturizing-cream.jpg'],
 desc:"Creme hidratante com PDRN e ácido hialurônico, que ajuda a fortalecer a hidratação, melhorar a aparência da barreira e deixar a pele mais viçosa. Ideal para todos os tipos de pele, especialmente desidratadas."},
{name:"PDRN Collagen Gua Sha Neck Wrinkle Cream",brand:"MEDICUBE",ml:"90g",category:"Hidratantes",price:359.00,images:['assets/medicube/pdrn-collagen-gua-sha-neck-wrinkle-cream.jpg'],
 desc:"Creme hidratante para pescoço e colo com PDRN, colágeno, Volufiline e peptídeos, desenvolvido para hidratar profundamente, melhorar a firmeza e elasticidade e suavizar a aparência das linhas e rugas. Sua textura cremosa e deslizante facilita a massagem, enquanto o aplicador Gua Sha integrado ajuda a espalhar o produto uniformemente e potencializa o cuidado durante a aplicação, deixando a pele mais macia, viçosa e com aparência rejuvenescida."},
{name:"Red Acne Succinic Acid Peel 1 Minute",brand:"MEDICUBE",ml:"40g",category:"Tratamentos Intensivos",price:229.00,images:['assets/medicube/red-acne-succinic-acid-peel-1-minute.jpg'],
 desc:"Peeling facial de ação rápida, desenvolvido para peles acneicas e sensíveis. Com ácido succínico + 21% de AHA e BHA, promove esfoliação suave em apenas 1 minuto, removendo células mortas, excesso de sebo e impurezas, ajudando a desobstruir os poros e prevenir novas imperfeições. Deixa a pele mais limpa, uniforme e equilibrada."},
{name:"Kojic Acid Turmeric Peel Shot",brand:"MEDICUBE",ml:"80ml",category:"Tratamentos Intensivos",price:249.00,images:['assets/medicube/kojic-acid-turmeric-peel-shot.jpg'],
 desc:"Peeling facial com ácido kójico e cúrcuma, desenvolvido para promover uma esfoliação controlada, remover células mortas e impurezas e auxiliar na renovação da pele. Sua fórmula ajuda a uniformizar o tom, melhorar a textura e revelar uma pele mais lisa e luminosa, sem obstruir os poros. Ideal para peles com hiperpigmentação e tom desigual."},
{name:"Lip Balm",brand:"MEDICUBE",ml:null,category:"Lip Balm",price:139.00,images:['assets/medicube/lip-balm.jpg'],
 desc:"Balm labial hidratante que ajuda a nutrir, suavizar e proteger os lábios contra o ressecamento. Ideal para lábios secos ou sensibilizados."},
{name:"Protetor Solar Stick PDRN Pink Collagen",brand:"MEDICUBE",ml:"20g",category:"Protetor Solar",price:249.00,images:['assets/medicube/protetor-solar-stick-pdrn-pink-collagen.jpg'],
 desc:"Protetor solar em stick, prático para reaplicação ao longo do dia, com PDRN e colágeno para complementar o cuidado com hidratação e aparência da pele. Ideal para todos os tipos de pele. Especialmente prático, inclusive para reaplicação."},
{name:"No Cast Just Glow Collagen Sunscreen SPF 50",brand:"MEDICUBE",ml:"50ml",category:"Protetor Solar",price:269.00,images:['assets/medicube/no-cast-just-glow-collagen-sunscreen-spf-50.jpg'],
 desc:"Protetor solar SPF 50 com acabamento luminoso, desenvolvido para proteger contra os raios UV enquanto proporciona aparência hidratada e radiante. Ideal para todos os tipos de pele."},
{name:"PDRN Pink Niacinamide Milky Toner",brand:"MEDICUBE",ml:"150ml",category:"Tônico Facial",price:249.00,images:['assets/medicube/pdrn-pink-niacinamide-milky-toner.jpg'],
 desc:"Tônico facial de textura leitosa, suave e hidratante, formulado com PDRN e niacinamida para proporcionar hidratação intensa, fortalecer a barreira cutânea e auxiliar na uniformização do tom. Deixa a pele mais macia, viçosa, luminosa e com frescor, preparando-a para os próximos passos da rotina de skincare."},
{name:"PDRN Pink Niacinamide Whip Cleanser",brand:"MEDICUBE",ml:"120g",category:"Limpeza Facial",price:239.00,images:['assets/medicube/pdrn-pink-niacinamide-whip-cleanser.jpg'],
 desc:"Espuma de limpeza com PDRN e niacinamida, que remove impurezas sem deixar sensação excessivamente ressecada. Ideal para todos os tipos de pele."},
{name:"PDRN Hydrating Gel Cleanser",brand:"MEDICUBE",ml:"200ml",category:"Limpeza Facial",price:239.00,images:['assets/medicube/pdrn-hydrating-gel-cleanser.jpg'],
 desc:"Gel de limpeza hidratante que remove impurezas e oleosidade enquanto ajuda a preservar a hidratação da pele. Ideal para peles normais, secas e desidratadas."},
{name:"Zero Foam Cleanser",brand:"MEDICUBE",ml:"120g",category:"Limpeza Facial",price:199.00,images:['assets/medicube/zero-foam-cleanser.jpg'],
 desc:"Espuma de limpeza da linha Zero Pore, desenvolvida para remover excesso de oleosidade e impurezas dos poros. Ideal para peles mistas, oleosas e com cravos."},
{name:"Kojic Acid Turmeric Toning Cleanser",brand:"MEDICUBE",ml:"120g",category:"Limpeza Facial",price:199.00,images:['assets/medicube/kojic-acid-turmeric-toning-cleanser.jpg'],
 desc:"Gel de limpeza com ácido kójico e cúrcuma, que promove limpeza enquanto auxilia no cuidado com luminosidade e uniformização do tom. Ideal para peles opacas e com manchas."},
{name:"Red Acne Body Peel Shot Esfoliante Corporal",brand:"MEDICUBE",ml:"110g",category:"Esfoliantes Corporais",price:199.00,images:['assets/medicube/red-acne-body-peel-shot-esfoliante-corporal.jpg'],
 desc:"Esfoliante corporal desenvolvido para auxiliar no cuidado de acne corporal, cravos, textura irregular e oleosidade. Ideal para costas, colo, braços e outras áreas com imperfeições."},
{name:"Kojic Acid Turmeric Body Peel Shot",brand:"MEDICUBE",ml:"280ml",category:"Esfoliantes Corporais",price:229.00,images:['assets/medicube/kojic-acid-turmeric-body-peel-shot.jpg'],
 desc:"Esfoliante corporal com ácido kójico e cúrcuma, focado em melhorar a textura e a aparência de manchas e marcas no corpo. Ideal para pele áspera, manchada e com tom irregular."},
{name:"AGE-R Booster Pro X2",brand:"MEDICUBE",ml:null,category:"Aparelhos de Skincare",price:2299.00,images:['assets/medicube/age-r-booster-pro-x2.jpg'],
 desc:"Aparelho facial multifuncional com 7 modos de tratamento para diferentes necessidades da pele: Booster Mode, potencializa a absorção de séruns e cremes; Air Shot Mode, auxilia na aparência dos poros e textura; MC Mode, utiliza microcorrentes para firmeza e elasticidade; Derma Shot Mode, com EMS, ajuda a definir o contorno facial; Dual Mode, combina dois modos simultaneamente; Mask Mode, potencializa a absorção de máscaras faciais; e AI Mode, personaliza os cuidados de acordo com as necessidades da pele através do aplicativo AGE-R."},
{name:"Pore + Dark Spot Brightening Serum",brand:"CELIMAX",ml:"30ml",category:"Séruns",price:249.00,images:['assets/celimax/pore-dark-spot-brightening-serum.jpg'],
 desc:"Sérum com ação iluminadora e uniformizadora, desenvolvido para ajudar a reduzir a aparência de manchas, marcas e poros, deixando a pele mais lisa e radiante. Ideal para peles com manchas, poros aparentes e tom irregular."},
{name:"Protetor Solar Stick Oil Control Mattifying",brand:"CELIMAX",ml:"19g",category:"Protetor Solar",price:199.00,images:['assets/celimax/protetor-solar-stick-oil-control-mattifying.jpg'],
 desc:"Protetor solar em stick com acabamento matte, que ajuda a controlar a oleosidade e proporciona proteção prática para reaplicar ao longo do dia. Ideal para peles mistas e oleosas."},
{name:"Kit The Real Noni",brand:"CELIMAX",ml:null,category:"Kits",price:239.00,images:['assets/celimax/kit-the-real-noni.jpg'],
 desc:"Kit completo da linha The Real Noni, ideal para uma rotina prática e também para viagens. Combina tônico, sérum e creme hidratante que ajudam a acalmar, hidratar e fortalecer a barreira da pele, além de melhorar a luminosidade e uniformizar o tom. Deixa a pele mais macia, nutrida, saudável e radiante."},
{name:"Madagascar Centella Poremizing Fresh Ampoule",brand:"SKIN1004",ml:"100ml",category:"Séruns",price:229.00,images:['assets/skin1004/madagascar-centella-poremizing-fresh-ampoule.jpg'],
 desc:"Ampola com Centella Asiática, desenvolvida para cuidar dos poros, controlar a oleosidade e melhorar a textura da pele, mantendo a hidratação. Ideal para peles mistas, oleosas e com poros aparentes."},
{name:"Kit Séruns Madagascar Centella",brand:"SKIN1004",ml:"4 unidades",category:"Kits",price:299.00,images:['assets/skin1004/kit-seruns-madagascar-centella.jpg'],
 desc:"Kit com 4 séruns, cada um desenvolvido para uma necessidade específica da pele: Centella Ampoule para acalmar e fortalecer a barreira, Tone Brightening Capsule Ampoule para luminosidade e uniformização do tom, Poremizing Fresh Ampoule para poros e oleosidade, e Probio-Cica Intensive Ampoule para hidratação e reparação da barreira cutânea. Um kit completo para uma rotina mais equilibrada, hidratada e saudável."},
{name:"Hyalu-Cica Water-Fit Sun Serum",brand:"SKIN1004",ml:"50ml",category:"Protetor Solar",price:229.00,images:['assets/skin1004/hyalu-cica-water-fit-sun-serum.jpg'],
 desc:"Protetor solar em textura de sérum com Hyalu-Cica, que combina ácido hialurônico e Centella Asiática para proteger, hidratar e acalmar a pele sem pesar. Ideal para todos os tipos de pele, especialmente desidratadas."},
{name:"No.2 Rose PDRN Collagen Plumping Serum",brand:"NUMBUZIN",ml:"30ml",category:"Séruns",price:239.00,images:['assets/numbuzin/no-2-rose-pdrn-collagen-plumping-serum.jpg'],
 desc:"Sérum com PDRN e colágeno, desenvolvido para hidratar profundamente, melhorar a elasticidade e proporcionar um efeito de pele mais preenchida, firme e viçosa. Ideal para peles desidratadas, maduras ou com perda de firmeza."},
{name:"Patches No.9 Nad+ Collagen Under Eye",brand:"NUMBUZIN",ml:"par",category:"Patch Facial",price:55.00,images:['assets/numbuzin/patches-no-9-nad-collagen-under-eye.jpg'],
 desc:"Patches para a área dos olhos com NAD+ e colágeno, que ajudam a hidratar, revitalizar e suavizar a aparência de linhas finas e sinais de cansaço/olheiras. Ideal para a região dos olhos ressecada, cansada ou com sinais de envelhecimento."},
{name:"Visibly Firming Collagen Retinol Refining Gua Sha Cream",brand:"ANUA",ml:"80ml",category:"Hidratantes",price:359.00,images:['assets/anua/visibly-firming-collagen-retinol-refining-gua-sha-cream.jpg'],
 desc:"Creme de tratamento facial multifuncional de alta performance, com colágeno e retinol, desenvolvido com um aplicador integrado em formato Gua Sha, que ajuda a espalhar o produto uniformemente e potencializa o cuidado durante a aplicação. Sua proposta combina uma potente fórmula antienvelhecimento com a técnica de massagem para esculpir, refinar e revitalizar a pele do rosto, pescoço e colo."},
{name:"Peach 77 Niacin Enriched Cream",brand:"ANUA",ml:"50ml",category:"Hidratantes",price:299.00,images:['assets/anua/peach-77-niacin-enriched-cream.jpg'],
 desc:"Creme hidratante com 77% de extrato de pêssego e niacinamida, que ajuda a hidratar, iluminar e uniformizar a aparência da pele. Ideal para todos os tipos de pele, especialmente opacas e desidratadas."},
{name:"Tônico Facial Rice 70+ Ceramide Glow Milky",brand:"ANUA",ml:"250ml",category:"Tônico Facial",price:275.00,images:['assets/anua/tonico-facial-rice-70-ceramide-glow-milky.jpg'],
 desc:"Tônico leitoso com 70% de extrato de arroz e ceramidas, que proporciona hidratação intensa, auxilia no fortalecimento da barreira e deixa a pele mais luminosa e viçosa. Ideal para peles secas, desidratadas e opacas."},
{name:"PDRN Collagen Melting Patch For Glass Skin",brand:"ANUA",ml:"4 unidades",category:"Patch Facial",price:179.00,images:['assets/anua/pdrn-collagen-melting-patch-for-glass-skin.jpg'],
 desc:"Patches com PDRN e colágeno, desenvolvidos para proporcionar hidratação intensa, luminosidade e aparência mais preenchida. Ideal para quem busca uma pele viçosa, hidratada e com efeito glass skin."},
{name:"147 Barrier Cream",brand:"DR. ALTHEA",ml:"50ml",category:"Hidratantes",price:259.00,images:['assets/dr-althea/147-barrier-cream.jpg'],
 desc:"Creme hidratante reparador desenvolvido para fortalecer e proteger a barreira cutânea, com ceramidas, óleo de abacate, azuleno e centella. Proporciona hidratação e nutrição intensas, ajudando a acalmar a pele e prevenir a perda de umidade, proporcionando hidratação e conforto. Possui textura rica e confortável, ideal para peles secas, desidratadas ou sensíveis"},
{name:"Reju 5000 Cream",brand:"DR. ALTHEA",ml:"20g",category:"Hidratantes",price:259.00,images:['assets/dr-althea/reju-5000-cream.jpg'],
 desc:"Creme de tratamento com ação reparadora e revitalizante, que auxilia na renovação da pele e melhora sua aparência, textura e hidratação. Ideal para peles que precisam de cuidado intensivo e recuperação."},
{name:"345 Relief Serum",brand:"DR. ALTHEA",ml:"30ml",category:"Séruns",price:229.00,images:['assets/dr-althea/345-relief-serum.jpg'],
 desc:"Sérum calmante e hidratante que ajuda a fortalecer a barreira cutânea, acalmar a pele e reduzir sinais de sensibilização. Ideal para peles sensíveis, acneicas ou sensibilizadas."},
{name:"345 Relief Cream Mist Tônico Facial",brand:"DR. ALTHEA",ml:"100ml",category:"Tônico Facial",price:249.00,images:['assets/dr-althea/345-relief-cream-mist-tonico-facial.jpg'],
 desc:"Mist facial com ação hidratante e calmante, ideal para refrescar a pele e manter a hidratação ao longo do dia. Indicado especialmente para peles sensíveis, ressecadas e sensibilizadas."},
{name:"Patches PDRN Retinal Eye Glow Jelly",brand:"ABIB",ml:"60 unidades",category:"Patch Facial",price:199.00,images:['assets/abib/patches-pdrn-retinal-eye-glow-jelly.jpg'],
 desc:"Patches para a área dos olhos com PDRN e retinal, que ajudam a hidratar, revitalizar e suavizar a aparência de linhas finas e sinais de cansaço. Ideal para a região dos olhos ressecada e com sinais de envelhecimento."},
{name:"Rice Probiotics Overnight Mask Barrier Jelly",brand:"ABIB",ml:"80ml",category:"Máscaras",price:245.00,images:['assets/abib/rice-probiotics-overnight-mask-barrier-jelly.jpg'],
 desc:"Máscara noturna com arroz e probióticos, desenvolvida para hidratar profundamente e auxiliar na recuperação da barreira cutânea durante o sono. Ideal para peles secas, desidratadas e sensibilizadas."},
{name:"TXA 2.5% Intensive Brightening Cream",brand:"AXIS-Y",ml:"50ml",category:"Hidratantes",price:245.00,images:['assets/axis-y/txa-2-5-intensive-brightening-cream.jpg'],
 desc:"Creme iluminador com ácido tranexâmico (TXA) 2,5% e niacinamida, desenvolvido para auxiliar no tratamento da aparência de manchas e uniformizar o tom da pele. Ideal para peles com manchas, marcas e tom irregular."},
{name:"Dark Spot Correcting Glow Cream",brand:"AXIS-Y",ml:"50ml",category:"Hidratantes",price:229.00,images:['assets/axis-y/dark-spot-correcting-glow-cream.jpg'],
 desc:"Creme com niacinamida e extratos botânicos, desenvolvido para ajudar a reduzir a aparência de manchas e marcas, além de proporcionar hidratação e luminosidade. Ideal para todos os tipos de pele, especialmente com tom irregular."},
{name:"Vegan Collagen Eye Serum",brand:"AXIS-Y",ml:"10ml",category:"Área dos Olhos",price:199.00,images:['assets/axis-y/vegan-collagen-eye-serum.jpg'],
 desc:"Sérum para a área dos olhos com colágeno vegano, desenvolvido para hidratar, melhorar a aparência da firmeza e suavizar linhas finas. Ideal para a região dos olhos ressecada, cansada ou com sinais de envelhecimento."},
{name:"Vitamin C Booster Shot",brand:"ARENCIA",ml:"30ml",category:"Séruns",price:249.00,images:['assets/arencia/vitamin-c-booster-shot.jpg'],
 desc:"Sérum concentrado com Vitamina C, desenvolvido para iluminar a pele, uniformizar o tom e auxiliar na aparência de manchas e marcas. Ideal para peles opacas, com manchas e tom irregular."},
{name:"PDRN Booster Shot",brand:"ARENCIA",ml:"30ml",category:"Séruns",price:249.00,images:['assets/arencia/pdrn-booster-shot.jpg'],
 desc:"Sérum com PDRN, desenvolvido para hidratar, revitalizar e melhorar a aparência, firmeza e elasticidade da pele. Ideal para peles desidratadas, maduras ou sensibilizadas."},
{name:"Retinal Booster Shot",brand:"ARENCIA",ml:"30ml",category:"Tratamentos Intensivos",price:249.00,images:['assets/arencia/retinal-booster-shot.jpg'],
 desc:"Tratamento concentrado com retinal, que auxilia na renovação da pele, melhora a textura e suaviza a aparência de linhas finas. Ideal para peles maduras, com textura irregular ou sinais de envelhecimento."},
{name:"Nad + Booster Shot",brand:"ARENCIA",ml:"30ml",category:"Tratamentos Intensivos",price:249.00,images:['assets/arencia/nad-booster-shot.jpg'],
 desc:"Tratamento concentrado com NAD+, desenvolvido para revitalizar a pele, melhorar a aparência, firmeza e promover um aspecto mais saudável e descansado. Ideal para peles maduras, opacas ou com sinais de fadiga."},
{name:"Seoul 1988 Advanced Shot Retinal Liposome 12% + Black Rice",brand:"K-SECRET",ml:"15ml",category:"Tratamentos Intensivos",price:219.00,images:['assets/k-secret/seoul-1988-advanced-shot-retinal-liposome-12-black-rice.jpg'],
 desc:"Tratamento intensivo com retinal lipossomado e arroz preto, desenvolvido para estimular a renovação da pele, melhorar textura e suavizar a aparência de linhas finas. Ideal para peles maduras ou com sinais de envelhecimento."},
{name:"Seoul 1988 Glow Serum Niacinamide 15% + Yuja",brand:"K-SECRET",ml:"30ml",category:"Séruns",price:239.00,images:['assets/k-secret/seoul-1988-glow-serum-niacinamide-15-yuja.jpg'],
 desc:"Sérum com niacinamida 15% e yuja, desenvolvido para controlar a oleosidade, uniformizar o tom e proporcionar luminosidade à pele. Ideal para peles mistas e oleosas, com manchas e marcas."},
{name:"Red Bean Refreshing Pore Mask",brand:"BEAUTY OF JOSEON",ml:"140ml",category:"Máscaras",price:259.00,images:['assets/beauty-of-joseon/red-bean-refreshing-pore-mask.jpg'],
 desc:"Máscara com feijão vermelho e argila, desenvolvida para remover impurezas, controlar a oleosidade e ajudar a desobstruir os poros sem ressecar excessivamente. Ideal para peles mistas, oleosas e com poros aparentes."},
{name:"Revive Eye Serum",brand:"BEAUTY OF JOSEON",ml:"30ml",category:"Área dos Olhos",price:249.00,images:['assets/beauty-of-joseon/revive-eye-serum.jpg'],
 desc:"Sérum para a área dos olhos com ginseng e retinal, que auxilia na hidratação, firmeza e suavização da aparência de linhas finas. Ideal para a região dos olhos com sinais de envelhecimento, cansaço ou ressecamento."},
{name:"Glow Deep Serum Rice + Alpha-Arbutin",brand:"BEAUTY OF JOSEON",ml:"30ml",category:"Séruns",price:229.00,images:['assets/beauty-of-joseon/glow-deep-serum-rice-alpha-arbutin.jpg'],
 desc:"Sérum iluminador com extrato de arroz e alfa-arbutina, desenvolvido para uniformizar o tom e auxiliar na aparência de manchas e marcas. Ideal para peles opacas, com hiperpigmentação e tom irregular."},
{name:"Protetor Solar Relief Sun Aqua-Fresh",brand:"BEAUTY OF JOSEON",ml:"50ml",category:"Protetor Solar",price:239.00,images:['assets/beauty-of-joseon/protetor-solar-relief-sun-aqua-fresh.jpg'],
 desc:"Protetor solar de textura leve e refrescante, com arroz e ativos hidratantes, que protege contra os raios UV sem deixar sensação pesada. Ideal para todos os tipos de pele, especialmente mistas e oleosas."},
{name:"Protetor Solar Stick FPS 50",brand:"OMG",ml:"18g",category:"Protetor Solar",price:210.00,images:['assets/omg/protetor-solar-stick-fps-50.jpg'],
 desc:"Protetor solar em stick FPS 50, ideal para reaplicação ao longo do dia, com textura leve, confortável e fácil de espalhar. Ajuda a proteger a pele contra os raios solares sem deixar sensação pesada ou pegajosa, sendo perfeito para levar na bolsa e reaplicar sempre que necessário. Prático e portátil."},
{name:"Berry NAD+ Peptide Serum",brand:"EQQUAL",ml:"30ml",category:"Séruns",price:259.00,images:['assets/eqqual/berry-nad-peptide-serum.jpg'],
 desc:"Sérum com NAD+ e peptídeos, desenvolvido para hidratar, revitalizar e melhorar a aparência de firmeza e elasticidade da pele. Ideal para peles maduras, desidratadas ou com aspecto cansado."},
{name:"Berry Vitamin Illuminating Serum",brand:"EQQUAL",ml:"30ml",category:"Séruns",price:259.00,images:['assets/eqqual/berry-vitamin-illuminating-serum.jpg'],
 desc:"Sérum iluminador com vitaminas e extratos de berries, que auxilia na uniformização do tom, luminosidade e revitalização da pele. Ideal para peles opacas, com manchas e tom irregular."},
{name:"Máscara Capilar CER-100 Collagen Protein Treatment",brand:"ELIZAVECCA",ml:"100ml",category:"Cabelo",price:169.00,images:['assets/elizavecca/mascara-capilar-cer-100-collagen-protein-treatment.jpg'],
 desc:"Máscara capilar coreana com colágeno, ceramidas e proteínas, desenvolvida para nutrir, reparar e fortalecer fios danificados, deixando o cabelo mais macio, alinhado e brilhante. Ideal para cabelos secos, danificados, quebradiços ou quimicamente tratados."},
].map((p,i)=>({...p, id:i+1}));

/* Estas três variáveis eram "const" fixas; agora são preenchidas
   dinamicamente depois que os produtos chegam do Supabase. */
let PRODUCTS = [];
let CATEGORIES = [];
let BRANDS = [];

function setProducts(list){
  PRODUCTS = list;
  CATEGORIES = [...new Set(PRODUCTS.map(p=>p.category))];
  BRANDS = [...new Set(PRODUCTS.map(p=>p.brand))];
}

// Converte uma linha da tabela "products" do Supabase para o formato que o site usa
function mapRowToProduct(row, idx){
  return {
    id: row.id,
    name: row.name,
    brand: row.brand,
    ml: row.ml,
    category: row.category,
    price: Number(row.price),
    images: row.images || [],
    desc: row.description || "",
    badge: row.badge || undefined,
  };
}

async function loadProducts(){
  try{
    const { data, error } = await supabaseClient
      .from('products')
      .select('*')
      .order('created_at', { ascending: true });
    if(error) throw error;
    if(!data || data.length===0){ setProducts(FALLBACK_PRODUCTS); return; }
    setProducts(data.map(mapRowToProduct));
  }catch(err){
    console.error('Não foi possível carregar produtos do Supabase, usando lista local.', err);
    setProducts(FALLBACK_PRODUCTS);
  }
}

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
"Limpeza Facial": `<rect x="30" y="30" width="40" height="60" rx="12" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="40" y="14" width="20" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M60 14 L70 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="70" cy="6" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/>`,
Kits: `<rect x="20" y="38" width="60" height="46" rx="4" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M20 52h60" stroke="currentColor" stroke-width="2.2"/><path d="M42 38v46M58 38v46" stroke="currentColor" stroke-width="1.6" opacity=".5"/><path d="M34 38c0-10 6-18 16-18s16 8 16 18" fill="none" stroke="currentColor" stroke-width="2.2"/>`,
"Área dos Olhos": `<path d="M50 26c-16 0-28 12-32 24 4 12 16 24 32 24s28-12 32-24c-4-12-16-24-32-24z" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="50" cy="50" r="9" fill="none" stroke="currentColor" stroke-width="2"/>`,
"Protetor Solar": `<rect x="36" y="30" width="28" height="56" rx="8" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="40" y="16" width="20" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="50" cy="8" r="5" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".6"/><path d="M40 10l-6-4M60 10l6-4" stroke="currentColor" stroke-width="1.4" opacity=".5"/>`,
Cabelo: `<path d="M40 18h20v14c8 4 12 12 12 22v58a8 8 0 0 1-8 8H36a8 8 0 0 1-8-8V54c0-10 4-18 12-22V18z" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="36" y="10" width="28" height="10" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M38 60c4 8 4 16 0 24M50 60c4 8 4 16 0 24M62 60c4 8 4 16 0 24" stroke="currentColor" stroke-width="1.4" opacity=".4" stroke-linecap="round"/>`,
"Cílios/Sobrancelhas": `<rect x="45" y="10" width="10" height="50" rx="5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M32 62c8 8 28 8 36 0" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M30 66l6 6M70 66l-6 6M50 68v10" stroke="currentColor" stroke-width="1.6" opacity=".55" stroke-linecap="round"/>`,
Perfumes: `<path d="M42 14h16v24l6 10v54a6 6 0 0 1-6 6H42a6 6 0 0 1-6-6V48l6-10V14z" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="40" y="8" width="20" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M36 44h28M36 54h28" stroke="currentColor" stroke-width="1.4" opacity=".4"/>`,
"Hidratantes Corporais": `<rect x="24" y="34" width="52" height="56" rx="14" fill="none" stroke="currentColor" stroke-width="2.2"/><ellipse cx="50" cy="34" rx="26" ry="8" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="34" y="20" width="32" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="2.2"/>`,
"Lip Balm": `<path d="M50 12c10 0 16 8 16 18 0 12-8 18-16 26-8-8-16-14-16-26 0-10 6-18 16-18z" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="46" y="56" width="8" height="34" rx="4" fill="none" stroke="currentColor" stroke-width="2.2"/>`,
"Tônico Facial": `<path d="M40 18h20v14c8 4 12 12 12 22v58a8 8 0 0 1-8 8H36a8 8 0 0 1-8-8V54c0-10 4-18 12-22V18z" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="36" y="10" width="28" height="10" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="30" y1="70" x2="70" y2="70" stroke="currentColor" stroke-width="1.6" opacity=".5"/>`,
"Patch Facial": `<circle cx="42" cy="46" r="22" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="60" cy="60" r="22" fill="none" stroke="currentColor" stroke-width="2" opacity=".55"/>`,
"Esfoliantes Corporais": `<rect x="24" y="34" width="52" height="56" rx="14" fill="none" stroke="currentColor" stroke-width="2.2"/><ellipse cx="50" cy="34" rx="26" ry="8" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="38" cy="58" r="3" fill="currentColor" opacity=".5"/><circle cx="50" cy="66" r="3" fill="currentColor" opacity=".5"/><circle cx="62" cy="56" r="3" fill="currentColor" opacity=".5"/>`
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
  clearTimeout(toastTimer);
  document.getElementById('toast')?.remove();
  document.getElementById('app')?.insertAdjacentHTML('beforeend', toastHtml());
  requestAnimationFrame(()=>document.getElementById('toast')?.classList.add('show'));
  toastTimer = setTimeout(()=>{
    document.getElementById('toast')?.classList.remove('show');
    setTimeout(()=>{ state.toastMsg=null; document.getElementById('toast')?.remove(); },280);
  },2200);
}

function refreshNavigation(){
  const header = document.getElementById('topbar');
  if(header) header.outerHTML = headerHtml();
  const nav = document.querySelector('.bottom-nav');
  if(nav) nav.outerHTML = bottomNavHtml();
}

function refreshCartDrawer(){
  const drawer = document.getElementById('cartDrawer');
  if(drawer) drawer.outerHTML = cartDrawerHtml();
  if(state.cartOpen) requestAnimationFrame(()=>document.getElementById('cartDrawer')?.classList.add('show'));
}

function addToCart(id, qty=1){
  const existing = state.cart.find(c=>c.id===id);
  if(existing){ existing.qty += qty; } else { state.cart.push({id, qty}); }
  refreshNavigation();
  refreshCartDrawer();
  showToast("Adicionado ao carrinho ✓");
}
function updateQty(id, delta){
  const item = state.cart.find(c=>c.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0){ state.cart = state.cart.filter(c=>c.id!==id); }
  refreshNavigation();
  refreshCartDrawer();
}
function removeFromCart(id){
  state.cart = state.cart.filter(c=>c.id!==id);
  refreshNavigation();
  refreshCartDrawer();
}
function toggleFav(id, ev){
  if(ev) ev.stopPropagation();
  if(state.favorites.has(id)) state.favorites.delete(id); else state.favorites.add(id);
  renderProductsOnly();
  const productOverlay = document.querySelector('.pdp-overlay');
  if(productOverlay){
    productOverlay.outerHTML = productHtml();
    requestAnimationFrame(()=>document.querySelector('.pdp-overlay')?.classList.add('show'));
  }
}
function openProduct(id){
  state.view='product'; state.productId=id; state.galleryIdx=0;
  document.querySelector('.pdp-overlay')?.remove();
  document.getElementById('app')?.insertAdjacentHTML('beforeend', productHtml());
  requestAnimationFrame(()=>document.querySelector('.pdp-overlay')?.classList.add('show'));
}
function closeProduct(){
  document.querySelector('.pdp-overlay')?.classList.remove('show');
  setTimeout(()=>{ state.view='home'; state.productId=null; document.querySelector('.pdp-overlay')?.remove(); },300);
}
function openCart(){ state.cartOpen=true; refreshCartDrawer(); requestAnimationFrame(()=>{document.getElementById('cartDrawer')?.classList.add('show'); document.getElementById('overlay')?.classList.add('show');}); }
function closeCart(){ document.getElementById('cartDrawer')?.classList.remove('show'); document.getElementById('overlay')?.classList.remove('show'); setTimeout(()=>{state.cartOpen=false;},280); }
function openMenu(){ state.menuOpen=true; const menu=document.getElementById('menuDrawer'); if(menu) menu.outerHTML=menuDrawerHtml(); requestAnimationFrame(()=>{document.getElementById('menuDrawer')?.classList.add('show'); document.getElementById('overlay2')?.classList.add('show');}); }
function closeMenu(){ document.getElementById('menuDrawer')?.classList.remove('show'); document.getElementById('overlay2')?.classList.remove('show'); setTimeout(()=>{state.menuOpen=false;},280); }
function toggleSearch(){ state.searchOpen=!state.searchOpen; document.querySelector('.search-bar-wrap')?.classList.toggle('open',state.searchOpen); if(state.searchOpen) requestAnimationFrame(()=>document.getElementById('searchInput')?.focus()); }
function openLightbox(id){ state.lightbox=id; document.getElementById('lightbox')?.remove(); document.getElementById('app')?.insertAdjacentHTML('beforeend',lightboxHtml()); requestAnimationFrame(()=>document.getElementById('lightbox')?.classList.add('show')); }
function closeLightbox(){ document.getElementById('lightbox')?.classList.remove('show'); setTimeout(()=>{state.lightbox=null; document.getElementById('lightbox')?.remove();},200); }
function setCategory(c){ state.category=c; document.querySelectorAll('.chip').forEach(el=>el.classList.toggle('active',el.textContent.trim()===(c==='all'?'Todas':c))); renderProductsOnly(); }
function setBrandFilter(b){ state.brand=b; renderProductsOnly(); }
function setSort(v){ state.sort=v; renderProductsOnly(); }
function setQuery(v){ state.query=v; renderProductsOnly(); }
function goHome(){ state.view='home'; state.productId=null; document.querySelector('.pdp-overlay')?.remove(); window.scrollTo(0,0); }
function nextGalleryImg(dir){ const p=findProduct(state.productId); const count=productGalleryCount(p); state.galleryIdx=(state.galleryIdx+dir+count)%count; const overlay=document.querySelector('.pdp-overlay'); if(overlay) overlay.outerHTML=productHtml(); }
function selectGalleryImg(index){
  state.galleryIdx=index;
  const overlay=document.querySelector('.pdp-overlay');
  if(overlay){
    overlay.outerHTML=productHtml();
    requestAnimationFrame(()=>document.querySelector('.pdp-overlay')?.classList.add('show'));
  }
}

function whatsappCheckout(single=null){
  let lines = [];
  let total = 0;
  if(single){
    const p = findProduct(single.id);
    lines.push(`• ${p.brand} — ${p.name}${p.ml?` (${p.ml})`:''}\n  Quantidade: ${single.qty}`);
    total = p.price*single.qty;
  } else {
    if(state.cart.length===0){ showToast("Seu carrinho está vazio"); return; }
    state.cart.forEach(c=>{
      const p = findProduct(c.id);
      lines.push(`• ${p.brand} — ${p.name}${p.ml?` (${p.ml})`:''}\n  Quantidade: ${c.qty}`);
      total += p.price*c.qty;
    });
  }
  const msg = `Olá! 👋\n\nTenho interesse nos seguintes produtos:\n\n${lines.join('\n\n')}\n\nTotal: ${fmt(total)}\n\nGostaria de finalizar meu pedido.`;
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
    <div class="hero-ring"><div class="logo-mark" style="background:none;box-shadow:none;"><img src="assets/logo/icone-r.png" alt="RBeauty" style="width:100%;height:100%;object-fit:contain;"></div></div>
    <h1>RBeauty</h1>
    <p class="sub">CURADORIA DE BELEZA IMPORTADA</p>
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
          <div class="logo-mark" style="background:none;box-shadow:none;"><img src="assets/logo/icone-r.png" alt="RBeauty" style="width:100%;height:100%;object-fit:contain;"></div>
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
        <a href="admin.html" style="opacity:.45; font-size:11px; text-decoration:none; color:inherit; margin-left:auto;">GERENCIAR</a>
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
          ${Array.from({length:productGalleryCount(p)},(_,i)=>i).map(i=>`<button class="${state.galleryIdx===i?'active':''}" onclick="event.stopPropagation(); selectGalleryImg(${i});"></button>`).join('')}
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
      <div class="logo"><div class="logo-mark" style="background:none;box-shadow:none;"><img src="assets/logo/icone-r.png" alt="RBeauty" style="width:100%;height:100%;object-fit:contain;"></div><div class="logo-text">RBeauty<small>Imports</small></div></div>
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
        <div class="logo-mark" style="background:none;box-shadow:none;"><img src="assets/logo/icone-r.png" alt="RBeauty" style="width:100%;height:100%;object-fit:contain;"></div>
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
function ensureDesktopProductLayout(){
  if(document.getElementById('pdp-desktop-layout-fix')) return;
  const style = document.createElement('style');
  style.id = 'pdp-desktop-layout-fix';
  style.textContent = `
    @media (min-width: 769px){
      .pdp-overlay{
        padding:24px !important;
        box-sizing:border-box !important;
      }
      .pdp-inner{
        position:relative !important;
        display:grid !important;
        grid-template-columns:minmax(320px, 42%) minmax(0, 58%) !important;
        grid-template-rows:minmax(0, 1fr) !important;
        width:min(1100px, 94vw) !important;
        height:min(760px, 90vh) !important;
        max-width:none !important;
        max-height:90vh !important;
        overflow:hidden !important;
      }
      .pdp-topbar{
        position:absolute !important;
        top:16px !important;
        right:16px !important;
        left:16px !important;
        z-index:20 !important;
        display:flex !important;
        justify-content:space-between !important;
        pointer-events:none !important;
      }
      .pdp-topbar > *{ pointer-events:auto !important; }
      .pdp-inner > div:nth-child(2){
        grid-column:1 !important;
        grid-row:1 !important;
        min-width:0 !important;
        min-height:0 !important;
        height:100% !important;
        overflow:hidden !important;
        display:flex !important;
        flex-direction:column !important;
      }
      .pdp-gallery{
        flex:1 1 auto !important;
        min-width:0 !important;
        min-height:0 !important;
        height:auto !important;
      }
      .pdp-gallery img,
      .pdp-gallery .prod-img{
        width:100% !important;
        height:100% !important;
        object-fit:contain !important;
      }
      .pdp-body{
        grid-column:2 !important;
        grid-row:1 !important;
        min-width:0 !important;
        max-width:100% !important;
        height:100% !important;
        overflow-x:hidden !important;
        overflow-y:auto !important;
        box-sizing:border-box !important;
      }
      .pdp-actions,
      .pdp-actions .btn,
      .related-row,
      .rel-scroll{
        min-width:0 !important;
        max-width:100% !important;
        box-sizing:border-box !important;
      }
      .rel-scroll{ overflow-x:auto !important; }
    }
  `;
  document.head.appendChild(style);
}

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

async function init(){
  ensureDesktopProductLayout();
  const app = document.getElementById('app');
  app.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;color:var(--gold-deep,#a8823a);font-family:sans-serif;">Carregando produtos...</div>`;
  await loadProducts();
  render();
}

// Evita que os botões do catálogo enviem um formulário externo por acidente.
document.addEventListener('click', event=>{
  const button=event.target.closest('button');
  if(button?.form) event.preventDefault();
},true);
init();
