// Fonte única dos dados do negócio. Tudo que aparece como fato no site vem daqui.
// Itens marcados [CONFIRMAR] estão desligados até o dono validar (ver docs/spec).

export const site = {
  nome: 'Barbearia Lauzangeles',
  nomeCurto: 'Lauzangeles',
  desde: 2015,
  slogan: 'Barbearia no Tremembé, desde 2015.',
  descricao:
    'Barbearia Lauzangeles no Tremembé, Zona Norte de São Paulo. Corte, barba e bigode desde 2015, com nota 5,0 no Google. Agende pelo WhatsApp.',
  endereco: {
    rua: 'R. Mamud Rahd, 47',
    bairro: 'Tremembé',
    cidade: 'São Paulo',
    uf: 'SP',
    cep: '02372-090',
    linha: 'R. Mamud Rahd, 47 - Tremembé, São Paulo - SP, 02372-090',
  },
  telefone: { exibicao: '(11) 97438-8689', e164: '+5511974388689', wa: '5511974388689' },
  whatsappMensagem: 'Olá! Vim pelo site da Barbearia Lauzangeles e quero agendar um horário.',
  instagram: { usuario: 'barbearialauzangeles', url: 'https://www.instagram.com/barbearialauzangeles' },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('R. Mamud Rahd, 47 - Tremembé, São Paulo - SP, 02372-090'),
  // Google (print da ficha, out/2026). Exibir sempre com data e link.
  google: { nota: '5,0', avaliacoes: 619, referencia: 'out/2026' },
  // Índice 0 = domingo. Horários locais de São Paulo.
  horarios: [
    { dia: 'Domingo', abre: 10, fecha: 14 },
    { dia: 'Segunda-feira', abre: 10, fecha: 20 },
    { dia: 'Terça-feira', abre: 10, fecha: 20 },
    { dia: 'Quarta-feira', abre: 10, fecha: 20 },
    { dia: 'Quinta-feira', abre: 10, fecha: 20 },
    { dia: 'Sexta-feira', abre: 10, fecha: 20 },
    { dia: 'Sábado', abre: 10, fecha: 20 },
  ],
  horarioResumo: 'Segunda a sábado, 10h às 20h. Domingo, 10h às 14h.',
  servicos: [
    {
      slug: 'corte',
      nome: 'Corte',
      resumo: 'Do clássico ao degradê, do jeito que você pediu.',
      detalhe:
        'Máquina e tesoura, com acabamento no contorno. Traga uma referência ou converse com o barbeiro na cadeira: o corte sai do seu jeito.',
      descricao:
        'Do clássico ao moderno, cada corte é pensado para combinar com seu estilo. Máquina, tesoura e acabamento preciso para entregar o resultado que você procura.',
      diferenciais: ['Cortes com máquina e tesoura', 'Degradê e cortes clássicos', 'Acabamento de contorno', 'Atendimento personalizado'],
      cta: 'Agendar corte',
      mensagem: 'Olá! Acessei o site da Lauzangeles e gostaria de agendar um corte. Quais horários estão disponíveis?',
    },
    {
      slug: 'barba',
      nome: 'Barba',
      resumo: 'Contorno e acabamento na navalha.',
      detalhe:
        'Barba desenhada e alinhada, com toalha e navalha. Do aparado discreto ao volume cheio.',
      descricao:
        'Mais definição, cuidado e personalidade. Um acabamento preciso, com toalha e navalha, respeitando o formato do seu rosto e o estilo que você deseja.',
      diferenciais: ['Desenho e alinhamento', 'Acabamento com navalha', 'Cuidado com os detalhes', 'Diferentes estilos de barba'],
      cta: 'Agendar barba',
      mensagem: 'Olá! Gostaria de agendar um horário para fazer a barba. Poderiam me informar a disponibilidade?',
    },
    {
      slug: 'bigode',
      nome: 'Bigode',
      resumo: 'Aparado e alinhado com precisão.',
      detalhe: 'Bigode no comprimento e no formato que combinam com o seu rosto, com acabamento limpo.',
      descricao:
        'Pequenos detalhes fazem diferença. Ajuste de comprimento, formato e acabamento para valorizar sua identidade.',
      diferenciais: ['Ajuste de comprimento', 'Definição do formato', 'Acabamento preciso'],
      cta: 'Agendar bigode',
      mensagem: 'Olá! Gostaria de agendar um horário para fazer o bigode. Poderiam me informar os horários disponíveis?',
    },
  ],
  // Portfólio: cada item com `foto` aparece e abre no lightbox; sem `foto`, vira espaço reservado.
  // Para publicar um trabalho real: salve a imagem em src/assets/galeria/ e aponte `foto` para ela em Galeria.astro.
  galeriaCategorias: ['Degradê', 'Clássico', 'Tesoura', 'Barba', 'Detalhes'],
  // [CONFIRMAR] ligar apenas depois de o dono validar os dados.
  flags: { galeriaEspacosReservados: true, mostrarPrecos: false, mostrarEquipe: false, mostrarDepoimentos: false, mostrarServicosExtras: false },
  // [CONFIRMAR] formas de pagamento, estacionamento, atendimento infantil, encaixe sem hora marcada.
  faqConfirmar: [] as { pergunta: string; resposta: string }[],
} as const;

export const whatsappUrl = (msg: string = site.whatsappMensagem) =>
  `https://wa.me/${site.telefone.wa}?text=${encodeURIComponent(msg)}`;
export const telUrl = `tel:${site.telefone.e164}`;

export const nav = [
  { href: '/', rotulo: 'Início' },
  { href: '/servicos', rotulo: 'Serviços' },
  { href: '/sobre', rotulo: 'Sobre' },
  { href: '/contato', rotulo: 'Contato' },
] as const;

export const faq = [
  {
    pergunta: 'Onde fica a Barbearia Lauzangeles?',
    resposta: `Na ${site.endereco.rua}, ${site.endereco.bairro}, ${site.endereco.cidade}/${site.endereco.uf}, CEP ${site.endereco.cep}. É no Tremembé, Zona Norte da capital, perto de Tucuruvi, Jaçanã e Santana (não é o município de Tremembé, no Vale do Paraíba).`,
  },
  {
    pergunta: 'Qual o horário de funcionamento?',
    resposta: site.horarioResumo,
  },
  {
    pergunta: 'Como faço para agendar?',
    resposta: `Pelo WhatsApp ${site.telefone.exibicao} ou por ligação para o mesmo número. É só dizer o serviço e o dia que prefere.`,
  },
  {
    pergunta: 'Quais serviços a barbearia oferece?',
    resposta: 'Corte, barba e bigode. Para saber valores e outros serviços, chame no WhatsApp.',
  },
  {
    pergunta: 'Posso ver o trabalho de vocês antes?',
    resposta: `Sim. Os cortes e o ambiente aparecem no Instagram @${site.instagram.usuario}.`,
  },
  ...site.faqConfirmar,
];
