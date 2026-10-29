# ADR 0001: Astro estático em vez de app React/Next

**Contexto.** Site institucional de uma barbearia: conteúdo quase fixo, SEO local, uso majoritário no celular, sem login nem banco.
**Decisão.** Astro (saída estática) + Tailwind v4, JS mínimo (entrada de seções, "aberto agora", troca de foto), hospedagem estática na Vercel.
**Consequências.** HTML pronto para buscadores, LCP baixo, superfície de ataque mínima. Sem formulário nem backend: o contato é por WhatsApp/telefone (spec §8 e §12). Dados do negócio concentrados em `src/data/site.ts`.

# ADR 0002: Sem iframe do Google Maps e sem `aggregateRating`

**Decisão.** O mapa é um link para rota; o JSON-LD não inclui `aggregateRating` nem `geo`.
**Motivo.** Evita rastreio de terceiros (LGPD) e CSP frouxa; avaliação sobre o próprio negócio não é elegível a rich results. A nota 5,0 aparece como texto datado com link para a ficha.
