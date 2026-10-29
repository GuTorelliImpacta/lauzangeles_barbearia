# Barbearia Lauzangeles — site institucional

Site estático (Astro + Tailwind v4 + TypeScript) da Barbearia Lauzangeles, R. Mamud Rahd, 47, Tremembé, São Paulo/SP.
Conversão principal: WhatsApp. Spec completa em [`docs/spec/barbearia-lauzangeles.md`](docs/spec/barbearia-lauzangeles.md).

## Rodar

```bash
npm install
npm run dev        # desenvolvimento
npm run build      # checagem de tipos + build estático em dist/
npm run preview    # serve dist/
npm run assets     # regera imagens otimizadas a partir de assets/originais (local, não versionado)
```

## Onde editar

| O quê | Onde |
|---|---|
| Telefone, endereço, horários, serviços, Instagram, nota do Google | `src/data/site.ts` |
| Preços, equipe, depoimentos, serviços extras | desligados em `site.flags` até o dono confirmar |
| Perguntas extras do FAQ (pagamento, estacionamento, crianças) | `site.faqConfirmar` |
| Cores e tipografia | tokens em `src/styles/global.css` (`@theme`) |

## Variáveis de ambiente

`SITE_URL` (ver `.env.example`): URL pública, usada em canonical, sitemap e Open Graph. Atualize também a linha `Sitemap:` de `public/robots.txt` quando houver domínio próprio.

## Deploy (Vercel)

Projeto estático: framework Astro, comando `npm run build`, saída `dist`. `vercel.json` já define `cleanUrls`, CSP, HSTS e demais headers.

## Analytics

Nenhum rastreador é carregado. Os botões têm `data-track` (`click_whatsapp`, `click_call`, `click_maps`, `click_instagram`); `src/scripts/main.ts` repassa o evento a `window.va` se existir e emite o evento DOM `lauz:track`. Se adicionar um coletor, use um sem cookies ou inclua consentimento.

## Pendências com o dono (`[CONFIRMAR]`)

Serviços e preços, número do WhatsApp (assumido igual ao telefone), domínio, autorização de imagem da foto de atendimento, formas de pagamento, estacionamento, atendimento infantil, equipe. Fotos necessárias: fachada, close de navalha/barba, resultados de cortes (com autorização), equipe, interior horizontal ≥ 1600 px, logo vetorial.

## Dependências e segurança

`npm audit` aponta avisos na cadeia de build do Astro 5 (esbuild, sharp, zod); a correção exige Astro 7, que pede Node ≥ 22.23.4. O site publicado é 100% estático (sem servidor nem execução dessas bibliotecas em produção). Ao migrar para Astro 7, usar Node atual na Vercel e rodar `npm run build` antes de publicar.
