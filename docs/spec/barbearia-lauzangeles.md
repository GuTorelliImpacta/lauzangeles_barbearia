# Spec: Site institucional — Barbearia Lauzangeles (Tremembé, São Paulo/SP)

> Fonte da verdade para a implementação. Skills executam **dentro** deste documento. Em caso de conflito, vale a spec; dúvida factual vira `[CONFIRMAR]`, nunca invenção.
> Gerada em 29/10/2026. Usuário pediu implementação completa sem perguntas: suposições declaradas abaixo.

## 1. Missão e resultado esperado
Criar o site institucional estático, mobile-first, em pt-BR, da **Barbearia Lauzangeles** (R. Mamud Rahd, 47 – Tremembé, São Paulo/SP). Público: homens (e pais de meninos/adolescentes) da Zona Norte de SP que buscam barbearia perto. **Conversão primária: agendar/falar pelo WhatsApp.** Secundárias: ligar, abrir rota no Maps, seguir no Instagram.
Resultado: site que (a) aparece para buscas locais, (b) transmite o clima real do espaço, (c) leva ao WhatsApp em até 1 toque no celular.

## 2. Fatos confirmados (com origem)
| Fato | Origem |
|---|---|
| Nome: Barbearia Lauzangeles (grafia do logo: LAUZANGELES) | Logo, dono do projeto |
| "Desde 2015" (SINCE 2015) | Logo |
| Lemas do logo: "Barba", "Bigode", "Barbearia" | Logo |
| Endereço: R. Mamud Rahd, 47 – Tremembé, São Paulo – SP, 02372-090 | Print Google Maps |
| Telefone: (11) 97438-8689 | Print Google Maps |
| Horários: seg–sáb 10:00–20:00; dom 10:00–14:00 | Print Google Maps |
| Nota 5,0 com 619 avaliações no Google (print recente, out/2026) | Print Google Maps |
| Ficha do Google oferece agendamento via WhatsApp ("Marcar reunião · whatsapp.com") e mensagem de texto | Print Google Maps |
| Instagram: @barbearialauzangeles | Link do dono do projeto |
| Ambiente: parede de madeira, cadeiras de couro caramelo, tubos de neon vermelho/branco no teto preto, carro vermelho estilo Mustang Shelby como peça decorativa, lustre de garrafas, espelhos com lâmpadas, bandeira de SP, TV, poltronas Chesterfield, mural de locomotiva | Fotos enviadas |
| Região: Tremembé fica na Zona Norte da capital, vizinho de Jaçanã, Tucuruvi e Santana, perto da Serra da Cantareira/Horto Florestal | Loft (listagem de bairro), print Maps (Parque Estadual da Cantareira) |

## 3. O que ainda não sabemos e regras de integridade
`[CONFIRMAR]` com o dono:
- Serviços completos e **preços** (só "Corte", "Barba", "Bigode" são sustentados pelo logo).
- Número de WhatsApp é o mesmo (11) 97438-8689? (**Suposição:** sim, pois a ficha liga ao WhatsApp.)
- Nomes/fotos da equipe; história do nome "Lauzangeles"; formas de pagamento; estacionamento; atende crianças; aceita encaixe sem hora marcada.
- Domínio próprio. (**Suposição:** `SITE_URL` por variável de ambiente; começa em `*.vercel.app`.)
- Autorização de imagem do cliente/menor na foto de atendimento.
- Coordenadas geográficas (não usar `geo` no JSON-LD até confirmar).
- Conteúdo do Instagram (acesso automático bloqueou com HTTP 429; **não contornar**). Pedir prints de bio e destaques.

Regras de integridade (inegociáveis):
- Nenhum depoimento, prêmio, preço, certificação, número de clientes ou "afiliado oficial" inventado.
- Os "5,0 · 619 avaliações" entram como **dado do Google com data (out/2026) e link para a ficha**. Não colocar `aggregateRating` no JSON-LD (avaliação sobre si mesmo; contraria diretrizes do Google).
- Seções que dependem de dado real (preços, equipe, depoimentos) **ficam ocultas** enquanto vazias, controladas por flag nos dados.
- Sem logos de terceiros; sem hotlink de imagem de rede social; sem rosto identificável de menor sem autorização.
- Não afirmar o que a foto não prova (ex.: "carro é uma mesa de sinuca").

## 4. Análise de marca
- **Nome:** "Lauzangeles" soa como trocadilho com "Los Angeles" `[CONFIRMAR origem]`; transmite estilo urbano/americano com sotaque paulistano.
- **Logo:** roundel preto com anel vermelho e branco, coroa, rosto de barba e topete branco, dois postes de barbeiro (vermelho/branco/azul), faixa "BARBEARIA", navalha vermelha, fitas "BARBA" "BIGODE" e "LAUZANGELES". Linguagem **barbearia clássica/old school** com peso de marca de rua.
- **Paleta (amostrada do logo e das fotos):**
  - Preto base `#171216` (fundo do logo)
  - Vermelho `#CA322F` (faixas/navalha), vermelho vivo `#D03030`
  - Branco-creme `#FAFBF6`
  - Azul do poste `#204070` (usar só em listras e detalhes)
  - Das fotos: couro caramelo `#BB6A3B`, madeira `#B1886A`
- **Personalidade:** acolhedora, orgulhosa do ofício, com atitude. Voz direta e de bairro, sem gíria forçada.
- **Narrativa:** "Barbearia de bairro com nível de estúdio: tradição de navalha, ambiente com identidade e 5,0 no Google." Diferencial provável: ambiente (carro, neon, madeira) diferente das barbearias genéricas.
- **Fraquezas a resolver:** sem site próprio; ambiguidade de busca com o **município de Tremembé (Vale do Paraíba)**, cuja busca "barbearia Tremembé" retorna casas de outra cidade (Fresha); nada sólido sobre serviços/preço online.

## 5. Nicho e concorrência
- Beleza no Brasil: Sebrae divulgou ~236 mil novos negócios de beleza em 2025 vs 199 mil em 2024 (+18,5%), 94% MEI. *(Bem Paraná, 18/01/2026, citando Sebrae.)* Conclusão: concorrência crescente e pulverizada; presença digital própria diferencia.
- Beleza masculina: crescimento anual de 7,8% no Brasil citado pelo Sebrae/PR `[CONFIRMAR data do documento antes de exibir; **não exibir no site**, uso só interno]`.
- Faixas de preço em SP citadas em diretórios (Booksy, jan-out/2026 consulta): corte+barba entre R$ 65 e R$ 130 conforme bairro. **Uso interno; não publicar preço do cliente até confirmação.**
- Concorrência local direta (Tremembé/Tucuruvi/Jaçanã): não mapeada por busca aberta; usar a ficha do Maps do dono para listar 3 concorrentes `[CONFIRMAR]`. Diferenciais **provados** do cliente: ambiente com identidade (fotos), 5,0 com 619 avaliações, desde 2015, agendamento por WhatsApp.

## 6. Público e objetivos
- **Principal:** homens 18–45 da Zona Norte (Tremembé, Tucuruvi, Jaçanã, Santana, Cantareira), mobile, vêm do Google/Instagram/indicação. Dores: achar barbearia boa e perto, saber horário aberto agora, agendar sem fricção, ver o ambiente antes.
- **Secundário:** pais de meninos/adolescentes (a foto de corte mostra público jovem).
- **KPIs:** cliques em WhatsApp, ligação, "Como chegar", Instagram.
- **Metas técnicas:** ver seção 11.

## 7. Direção de design
**Conceito: "Garagem Neon".** Nasce do espaço real: teto preto com tubos de neon em V (vermelho, branco, branco), carro vermelho ao fundo, couro caramelo e madeira. O V do neon ecoa a diagonal do poste de barbeiro do logo. Resultado: site escuro, quente, com linhas luminosas como motivo gráfico, não template de barbearia genérico.
- **Tokens obrigatórios:** `--preto #171216`, `--vermelho #CA322F`, `--creme #FAFBF6`, `--azul #204070`. **Máximo 2 acentos extras:** caramelo `#BB6A3B` (couro) e branco-neon `#E6F4FF`.
- **Tipografia (perfil):** títulos em condensada pesada com caixa alta (candidatas: Barlow Condensed, Big Shoulders Display, Anton); acento opcional serifada itálica; corpo humanista legível (Figtree, Manrope ou DM Sans). Definitiva fica com a `design-taste-frontend`. Self-host, `font-display: swap`, máx. 2 famílias.
- **Tom visual:** noir quente, contraste alto, linhas de neon animadas só com `transform/opacity` e respeitando `prefers-reduced-motion`.
- **Hero (descrição):** fundo preto com chevrons de neon (CSS/SVG) ecoando o teto; logo em roundel; **H1 em um único bloco legível**: "Corte, barba e bigode no Tremembé, desde 2015."; subtítulo com endereço e "Zona Norte de São Paulo"; **CTA primário "Agendar no WhatsApp" visível acima da dobra em 360×640**; CTA secundário "Como chegar"; selo "Aberto agora/Fecha às 20h" calculado por horário de São Paulo.
- **Cor de destaque:** vermelho só em CTA e linhas-chave; caramelo em detalhes de couro; azul só em listras de poste (divisores).
- **Contraste:** texto creme sobre preto ≥ 7:1; CTA vermelho com texto branco deve passar 4,5:1 (se não, escurecer para `#B52A28`).
- **Não fazer:** nada de tesoura/pente clipart genérico; sem stock photo de barbearia; sem hero com miniatura do Maps; sem carrossel automático; sem texto sobre foto sem overlay legível; sem ícones emoji; sem H1 quebrado em spans; sem gradiente roxo; sem contador/"clientes atendidos" inventado; sem repetir a mesma foto em seções diferentes.

## 8. UX: páginas e fluxo
Navegação (topo + rodapé): Início · Serviços · Sobre · Contato. Barra fixa inferior no celular com **WhatsApp** (primário) e **Ligar**.
| Página | Objetivo |
|---|---|
| `/` Início | Hero, faixa de confiança (desde 2015, 5,0 no Google com data e link), serviços resumidos, ambiente (2–3 fotos), como chegar/horário, CTA final |
| `/servicos` | Corte, Barba, Bigode (apenas os sustentados); lista extra e preços ocultos via flag até confirmação |
| `/sobre` | História ("desde 2015"), o espaço, filosofia; equipe oculta até haver dado |
| `/contato` | Endereço, mapa por link (sem iframe), horário semanal, telefone, WhatsApp, Instagram, FAQ |
| `/guias/como-pedir-degrade` e `/guias/cuidados-com-a-barba` | Topo de funil educativo (conteúdo genérico, sem promessa, sem preço) |
| `/privacidade` | LGPD |
| `404` | Mensagem + CTA |
- **Fluxo mobile:** Google/Instagram → Home → toque em WhatsApp (mensagem pré-preenchida: "Olá! Vim pelo site da Barbearia Lauzangeles e quero agendar um horário.") → conversa. Sem formulário (menos fricção, zero dado pessoal coletado).
- **Botões de contato:** `tel:+5511974388689` e `https://wa.me/5511974388689?text=...` (via dados editáveis). Abrem em nova aba com `rel="noopener noreferrer"`.

## 9. Conteúdo (copy final base)
- **Home H1:** "Corte, barba e bigode no Tremembé, desde 2015."
- **Sub:** "Barbearia Lauzangeles. Navalha, máquina e atenção no detalhe, na Zona Norte de São Paulo."
- **Faixa de confiança:** "Desde 2015 · 5,0 no Google (619 avaliações em out/2026) · Seg a sáb 10h às 20h, dom 10h às 14h".
- **Serviços (resumo):** Corte — "Do clássico ao degradê, do jeito que você pediu." Barba — "Contorno e acabamento na navalha." Bigode — "Aparado e alinhado com precisão." *(Frases de promessa genérica; sem prazo/preço.)*
- **Ambiente:** "Madeira, couro e neon. Um espaço pensado para você ficar à vontade enquanto cuida do visual."
- **Como chegar:** "R. Mamud Rahd, 47 – Tremembé, São Paulo/SP, CEP 02372-090. Fica na Zona Norte, perto de Tucuruvi, Jaçanã e Santana."
- **CTA final:** "Garanta seu horário. Chame no WhatsApp."
- **FAQ (só o que é fato ou confirmável):** Onde fica? Qual o horário? Como agendo? (WhatsApp ou telefone) · Itens com `[CONFIRMAR]` (preço, pagamento, estacionamento, crianças) ficam **ocultos**.
- **Guias:** textos de 400–600 palavras, orientações gerais (conversar com o barbeiro, levar referência, manutenção de contorno, hidratação), sem alegar resultado médico.
- **Tom:** direto, caloroso, 2ª pessoa, frases curtas.
- **Aviso legal:** rodapé com "Dados de avaliação do Google, atualizados em out/2026".

## 10. SEO
- **Termos:** barbearia no Tremembé, barbearia Tremembé São Paulo, barbearia Zona Norte SP, barbearia Tucuruvi/Jaçanã (secundário), corte degradê Zona Norte, barba e bigode. **Sempre desambiguar "Tremembé, São Paulo – Zona Norte"** (há o município homônimo no Vale do Paraíba).
- **Metadados:** title ≤ 60 caracteres, description ≤ 155, canonical, Open Graph e Twitter com imagem 1200×630 gerada do logo (não de rede social). Ex. Home: "Barbearia Lauzangeles | Tremembé, Zona Norte de SP".
- **JSON-LD:** `HairSalon` (+ `WebSite`), com `name`, `address` (PostalAddress), `telephone`, `openingHoursSpecification`, `sameAs` (Instagram), `url`, `image`, `priceRange` omitido. Sem `aggregateRating`, sem `geo`.
- **NAP idêntico à ficha:** "R. Mamud Rahd, 47 - Tremembé, São Paulo - SP, 02372-090" · "(11) 97438-8689".
- `sitemap.xml`, `robots.txt`, links internos entre serviços, guias e contato, `lang="pt-BR"`, `alt` descritivo em todas as imagens.
- **Checklist Google Meu Negócio (para o dono):** colocar URL do site, categoria "Barbearia", horários iguais ao site, link de agendamento = WhatsApp, enviar fotos originais em alta, responder avaliações, postar semanalmente.
- **Eventos de analytics (cookieless):** `click_whatsapp`, `click_call`, `click_maps`, `click_instagram`. Sem cookies de terceiros; sem banner se não houver rastreador com cookie.

## 11. Performance e acessibilidade
- Metas (mobile, 4G): LCP ≤ 2,0 s, CLS ≤ 0,05, INP ≤ 150 ms, Lighthouse ≥ 95 em Performance, Acessibilidade, Boas práticas e SEO.
- Imagens AVIF/WebP com `srcset`, dimensões explícitas, `loading="lazy"` abaixo da dobra; hero sem imagem pesada. Fontes self-host, subset latin. JS mínimo (ilhas apenas para "aberto agora" e menu).
- WCAG 2.1 AA: foco visível, navegação por teclado, link "pular para o conteúdo", alvos de toque ≥ 44 px, `prefers-reduced-motion`, landmarks. Teste obrigatório em 360 px.

## 12. Segurança e privacidade
- Sem formulário e sem backend próprio: superfície mínima. Se for adicionado depois: validação, honeypot, rate limit.
- LGPD: página `/privacidade` informando que o site não coleta dados pessoais; links externos (WhatsApp, Instagram, Maps) saem do site; sem iframe de terceiros (evita rastreio).
- Headers (via `vercel.json`): `Content-Security-Policy` restritiva (self + data: para imagens), `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` vazia, `X-Frame-Options: DENY`.
- Segredos só em variáveis de ambiente; nenhum no cliente. `npm audit` limpo para dependências diretas; versões fixas via lockfile.

## 13. Stack e estrutura
- **Stack:** Astro (saída estática) + Tailwind CSS + TypeScript. Motivo: HTML estático rápido para SEO local, JS quase zero, fácil manutenção. Hospedagem: Vercel (estático).
- **Repositório hoje vazio:** inicializar projeto na raiz.
- **Dados editáveis:** `src/data/site.ts` (nome, NAP, horários, WhatsApp, Instagram, rating+data, flags `mostrarPrecos`, `mostrarEquipe`, `mostrarDepoimentos`, lista de serviços). Todo texto de contato vem daqui.
- **Env:** `SITE_URL`, `PUBLIC_WHATSAPP_MSG` (opcional).

## 14. Assets e política de imagens
Originais já copiados para `assets/originais/` (não publicar este diretório; derivar versões otimizadas para `src/assets/`).
| Arquivo | O que mostra | Resolução | Origem | Uso |
|---|---|---|---|---|
| `logo-lauzangeles.jpg` | Logo roundel | 816×802 | Dono | Header, hero, favicon, OG. Fundo preto; recortar círculo, gerar versões; pedir vetor/PNG transparente |
| `interior-neon-mustang.jpg` | Neon, carro vermelho, cadeira, lustre | 1206×1553 | Provável Maps | Seção "Ambiente" (≥800 px ok); **não hero** |
| `interior-espelhos-bandeira.jpg` | Espelhos com lâmpadas, bandeira SP, cliente de costas com toalha | 835×1539 | Provável story | Sobre ou Ambiente (largura 835, usar ≤ 800 px) |
| `atendimento-barbeiro-cliente.jpg` | Barbeiro cortando cabelo de jovem | 1153×1606 | Dono | Uso autorizado pelo dono do projeto (cliente). Usada em Sobre. |
| `print-maps-horarios-endereco.jpg` | Print com horários/NAP | 1200×2000 | Dono | **Só referência, não publicar** |
- Regras: foto do cliente primeiro; miniatura de Maps/Instagram não serve para hero nem destaque; hero ≥ 1600 px (nenhuma foto atual atinge, portanto hero é gráfico); conteúdo ≥ 800 px; nada repetido em seções; imagem sem relação com o negócio não entra.
- **Fotos necessárias (pedir ao dono):** fachada externa, close de navalha/barba, resultado de cortes (com autorização), equipe, interior horizontal ≥ 1600 px, logo vetorial.

## 15. Processo e QA
1. Setup + design tokens + layout base. 2. Home. **3. Gate visual: screenshot da Home em 390, 768 e 1440 px, auditar e corrigir antes de construir o resto.** 4. Demais páginas. 5. SEO/JSON-LD/headers. 6. Revisão final em 390, 768 e 1440 px com ao menos um ciclo de correção. 7. Relatório final com pendências `[CONFIRMAR]` e fotos necessárias.

## 16. Critérios de aceite
- [ ] Páginas da seção 8 existem e navegam entre si; 404 funciona.
- [ ] NAP, telefone, horários e Instagram idênticos aos fatos da seção 2 (vêm de `site.ts`).
- [ ] Nenhum dado inventado: sem preço, depoimento, equipe, prêmio; flags desligadas ocultam as seções.
- [ ] CTA WhatsApp acima da dobra em 360×640; barra fixa mobile com WhatsApp e Ligar.
- [ ] Sem scroll horizontal em 360, 390, 768 e 1440 px.
- [ ] Contraste AA, navegação por teclado, `prefers-reduced-motion` respeitado.
- [ ] Lighthouse ≥ 95 nas quatro categorias (mobile).
- [ ] JSON-LD `HairSalon` válido, sem `aggregateRating`/`geo`; sitemap e robots publicados.
- [ ] Headers de segurança presentes; sem iframe de terceiros; sem cookies.
- [ ] Imagens conforme inventário (foto de menor retida, print não publicado, hero gráfico).
- [ ] `build` e lint sem erros.

## 17. Fontes
- Bem Paraná, "Quase 30 negócios na área de beleza são abertos por hora no país", 18/01/2026 (dados do Sebrae): https://www.bemparana.com.br/noticias/economia/quase-30-negocios-na-area-de-beleza-sao-abertos-por-hora-no-pais/
- Loft, "Onde morar em Tremembé (SP)": https://loft.com.br/onde-morar/sp/sao-paulo/tremembe/297DCDC8
- Fresha, barbearias em Tremembé (município do Vale do Paraíba, desambiguação): https://fresha.com/lp/en/tt/beard-trims/in/br-taubaté/tremembé
- Booksy, barbearias em São Paulo (faixas de preço, uso interno): https://booksy.com/pt-br/9507_barbearia-salve-man_barbearias_1047773_sao-paulo
- Instagram @barbearialauzangeles: acesso automático bloqueado (HTTP 429), não utilizado.
