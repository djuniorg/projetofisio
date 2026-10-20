(() => {
  'use strict';

  /* ==========================================================
     1. DADOS DO SITE: edite aqui os contatos
     ========================================================== */
  const SITE = {
    whatsapp: '5511951944206',          // só números, com 55 + DDD
    telefone: '(11) 95194-4206',
    email: 'ligoncalves.fisio@gmail.com',
    instagram: '@ligoncalves.fisio',
    horario: 'Seg a sex, 9h às 18h',
    registro: 'CREFITO 3 221505-F'
  };
  const wa = (texto = '') =>
    `https://wa.me/${SITE.whatsapp}${texto ? '?text=' + encodeURIComponent(texto) : ''}`;

  // Botão "Fale comigo pelo WhatsApp" (ícone + divisória + dois textos)
  const ICONE_WHATS = `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9"/><path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>`;
  const botaoWhats = (link) =>
    `<a class="btn btn-whats" href="${link}">${ICONE_WHATS}<span class="btn-div"></span><span class="btn-txt"><b>Fale comigo</b><small>pelo WhatsApp</small></span></a>`;

  /* ==========================================================
     2. AJUSTES DA ANIMAÇÃO DE ROLAGEM
        Valores em fração da altura da tela (0 = topo, 1 = base)
     ========================================================== */
  const ANIM = {
    entraInicio: 0.95,  // o elemento começa a aparecer quando o topo dele passa daqui
    entraFim: 0.72,     // e fica 100% visível quando o topo chega aqui
    saiInicio: 0.28,    // começa a sumir quando a base dele chega aqui
    saiFim: 0.06,       // e some por completo quando a base chega aqui
    deslocaEntrada: 28, // px que o elemento sobe ao aparecer
    deslocaSaida: 18,   // px que o elemento sobe ao sumir
    parallaxHero: 0.15  // velocidade do fundo do hero (0 desliga)
  };

  /* ==========================================================
     3. CONTEÚDO
        Imagens: coloque os arquivos na pasta /img com estes nomes
     ========================================================== */
  const IMAGENS = {
    cuidado: { src: 'img/cuidado.png', alt: 'Mãos de uma criança e de um adulto durante o atendimento',
      label: 'IMAGEM 2 · O CUIDADO\nimg/cuidado.png\n900×1100 px (vertical)\nMãos de adulto e criança, bebê no colo' },
    brincar: { src: 'img/brincar.png', alt: 'Criança brincando durante a sessão de fisioterapia',
      label: 'IMAGEM 3 · BRINCAR\nimg/brincar.png · 1600×600 px (horizontal)\nCriança brincando em casa, bolhas, tapete' },
    casa: { src: 'img/casa.png', alt: 'Família acompanhando o atendimento em casa',
      label: 'IMAGEM 4 · EM CASA\nimg/casa.png\n900×1100 px (vertical)\nFamília na sala ou no quarto da criança' },
    mapa: { src: 'img/mapa.png', alt: 'Mapa das regiões de São Paulo atendidas, cada uma em uma cor',
      label: 'IMAGEM 6 · MAPA\nimg/mapa.png\n1000×1000 px (quadrada)\nMapa de São Paulo com as regiões coloridas' },
    livia: { src: 'img/livia.png', alt: 'Retrato da fisioterapeuta Lívia Gonçalves',
      label: 'IMAGEM 5 · LÍVIA\nimg/livia.png\n900×1100 px (vertical)\nRetrato da Lívia, sorrindo, ambiente acolhedor' }
  };
  // Imagem larga do topo: img/hero.png (definida no CSS)
  const HERO_DICA = 'IMAGEM 1 · HERO\nimg/hero.png\n2400×800 px (3:1, horizontal)\nCriança sorrindo, com o rosto no lado direito';

  const HERO = {
    titulo: 'Para a criança respirar melhor, o cuidado vai até a casa dela.',
    texto: 'Fisioterapia respiratória pediátrica domiciliar em São Paulo, com atenção a cada criança e acolhimento para toda a família.',
    botao: 'Agendar uma conversa',
    mensagem: 'Olá Lívia, gostaria de saber mais sobre o atendimento'
  };

  const MENU = [
    ['#cuidado', 'O cuidado'], ['#tratamentos', 'Tratamentos'], ['#como', 'Como funciona'],
    ['#livia', 'Quem sou'], ['#duvidas', 'Dúvidas'], ['#contato', 'Contato']
  ];

  const FRASE = {
    texto: '“Nasceu da escuta. De ver famílias exaustas em corredores de hospital e acreditar que aquele lugar não precisava ser o único onde uma criança poderia respirar melhor.”',
    autor: 'Lívia Gonçalves, fisioterapeuta respiratória pediátrica'
  };

  const CUIDADO = {
    titulo: 'Fisioterapia respiratória em casa, no ritmo de cada criança.',
    paragrafos: [
      'A fisioterapia respiratória pediátrica trabalha para melhorar a respiração, ajudar na eliminação de secreções e dar mais conforto às crianças com quadros respiratórios, inclusive os que se repetem.',
      'Em casa, a criança está no ambiente que conhece, com os brinquedos e as pessoas de que gosta. Isso torna o atendimento mais tranquilo para ela e permite que a família aprenda, na prática, como ajudar no dia a dia.',
      'Com acompanhamento adequado, muitas internações podem ser evitadas. Esse é o propósito deste trabalho.'
    ]
  };

  // Revise com a Lívia: deixe só o que ela realmente atende
  const TRATAMENTOS = {
    titulo: 'Quando a fisioterapia respiratória pode ajudar',
    intro: 'Cada criança é avaliada individualmente. Alguns dos quadros acompanhados:',
    itens: [
      ['Bronquiolite e pneumonia', 'Apoio na higiene brônquica e na recuperação, para que a respiração volte a ficar leve.'],
      ['Asma e bronquite recorrente', 'Acompanhamento e orientação para reduzir crises e dar segurança à família.'],
      ['Pós-UTI e pós-internação', 'Reabilitação respiratória gradual quando a criança volta para casa.'],
      ['Recém-nascidos e prematuros', 'Cuidado delicado e orientação aos pais desde os primeiros meses.'],
      ['Crianças com traqueostomia ou uso de aparelhos', 'Treinamento da família e acompanhamento no uso seguro dos equipamentos.'],
      ['Doenças neurológicas e crônicas', 'Prevenção de complicações respiratórias e acúmulo de secreção.']
    ]
  };

  const PASSOS = {
    titulo: 'Como funciona o atendimento',
    intro: 'Um passo de cada vez, sem pressa e sem filas.',
    itens: [
      ['Você chama no WhatsApp', 'Conta o que está acontecendo e confirmamos se atendemos o seu bairro.'],
      ['Avaliação em casa', 'A Lívia avalia a respiração da criança e entende a rotina e as necessidades da família.'],
      ['Plano individual', 'Montamos o tratamento sob medida, com técnicas adequadas à idade e ao quadro.'],
      ['Acompanhamento próximo', 'Sessões regulares e orientações para a família continuar o cuidado no dia a dia.']
    ]
  };

  const BENEFICIOS = {
    titulo: 'Por que atender em casa faz diferença',
    itens: [
      ['Menos estresse para a criança', 'Sem trânsito, sala de espera ou ambiente desconhecido.'],
      ['Família junto', 'Pais e cuidadores acompanham e aprendem a ajudar.'],
      ['Atenção exclusiva', 'Tempo dedicado só à sua criança, no ritmo dela.'],
      ['Olhar para a rotina', 'Observamos o ambiente e damos orientações práticas para o dia a dia.'],
      ['Mais constância', 'Sem deslocamentos, fica mais fácil manter o tratamento.']
    ]
  };

  const SOBRE = {
    titulo: 'Oi, eu sou a Lívia.',
    paragrafos: [
      'Depois de 12 anos de prática clínica, vendo crianças com quadros respiratórios que se repetiam e o desgaste das famílias a cada internação, percebi que muito desse sofrimento poderia ser evitado com acompanhamento fisioterapêutico em casa.',
      'Em janeiro de 2024, transformei essa convicção em serviço: fisioterapia respiratória pediátrica baseada em evidências, humanizada e individualizada, que respeita o tempo e o contexto de cada família.'
    ],
    valores: ['Acolhimento', 'Segurança', 'Humanização', 'Confiança', 'Especialização', 'Presença', 'Cuidado', 'Leveza', 'Dignidade']
  };

  // Ajuste as respostas conforme a realidade da Lívia
  const FAQ = [
    ['Vocês atendem o meu bairro?', 'Chame no WhatsApp com o seu endereço e confirmamos a cobertura rapidamente.'],
    ['Como é o primeiro atendimento?', 'É uma avaliação em casa: Lívia observa a respiração da criança, conversa com a família sobre o histórico e define o plano de tratamento.'],
    ['Atendem por plano de saúde?', 'O atendimento é particular.'],
    ['Atendem em casos urgentes?', 'Lívia está disponivel para urgências e fins de semana.'],
    ['Meu filho acabou de sair da UTI. Posso começar?', 'Sim, Lívia acompanha a transição do hospital para casa em conjunto com a equipe médica da criança.'],
    ['Quais são as formas de pagamento?', 'Pix, transferência, cartão, pacotes e muito mais. Chame no WhatsApp e combinamos a melhor forma para você.']
  ];

  const ONDE = {
    titulo: 'Onde atendemos',
    texto: 'Atendemos em diversas regiões de São Paulo.',
    consulta: 'Quer saber se atendemos o seu endereço? Chame no WhatsApp e confirmamos rapidinho.',
    botao: 'Consultar meu endereço',
    mensagem: 'Olá, vocês atendem no meu endereço?'
  };


  const CONTATO = {
    titulo: 'Vamos conversar sobre a respiração do seu filho?',
    botao: 'Chamar no WhatsApp'
  };

  /* ==========================================================
     4. MONTAGEM DAS SEÇÕES
        data-reveal = elemento que aparece/some com a rolagem
     ========================================================== */
  const R = 'data-reveal';
  const figura = (i, extra = '') =>
    `<figure class="ph ${extra}" data-label="${i.label}" ${R}><img src="${i.src}" alt="${i.alt}" loading="lazy" onload="this.parentNode.classList.add('ok')" onerror="this.remove()"></figure>`;
  const paragrafos = (lista) => lista.map(t => `<p ${R}>${t}</p>`).join('');

  const header = () => `
    <header>
      <div class="wrap">
        <a class="logo" href="#topo" aria-label="Lívia Fisioterapia Respiratória Pediátrica, início"><img src="img/logo.png" alt="Lívia | Fisioterapia Respiratória Pediátrica"></a>
        <nav aria-label="Principal"><ul>${MENU.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></nav>
        ${botaoWhats(wa())}
      </div>
    </header>`;

  const hero = () => `
    <section class="hero" id="topo">
      <div class="hero-bg" id="heroBg"></div>
      <div class="hero-shade"></div>
      <div class="wrap hero-content">
        <h1 ${R}>${HERO.titulo}</h1>
        <p ${R}>${HERO.texto}</p>
        <a class="btn" ${R} href="${wa(HERO.mensagem)}">${HERO.botao}</a>
      </div>
      <p class="hero-ph">${HERO_DICA}</p>
    </section>`;

  const frase = () => `
    <section class="quote"><div class="wrap">
      <blockquote ${R}>${FRASE.texto}</blockquote>
      <cite ${R}>${FRASE.autor}</cite>
    </div></section>`;

  const cuidado = () => `
    <section id="cuidado"><div class="wrap split">
      ${figura(IMAGENS.cuidado)}
      <div><h2 ${R}>${CUIDADO.titulo}</h2>${paragrafos(CUIDADO.paragrafos)}</div>
    </div></section>`;

  const tratamentos = () => `
    <section id="tratamentos" class="treat"><div class="wrap">
      <div class="head"><h2 ${R}>${TRATAMENTOS.titulo}</h2><p ${R}>${TRATAMENTOS.intro}</p></div>
      <dl>${TRATAMENTOS.itens.map(([t, d]) => `<div class="item" ${R}><dt>${t}</dt><dd>${d}</dd></div>`).join('')}</dl>
      ${figura(IMAGENS.brincar)}
    </div></section>`;

  const passos = () => `
    <section id="como" class="steps"><div class="wrap">
      <h2 ${R}>${PASSOS.titulo}</h2><p class="lead" ${R}>${PASSOS.intro}</p>
      <ol>${PASSOS.itens.map(([t, d]) => `<li ${R}><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
    </div></section>`;

  const beneficios = () => `
    <section class="ben"><div class="wrap split rev">
      <div><h2 ${R}>${BENEFICIOS.titulo}</h2>
        <ul>${BENEFICIOS.itens.map(([t, d]) => `<li ${R}><strong>${t}</strong>${d}</li>`).join('')}</ul></div>
      ${figura(IMAGENS.casa)}
    </div></section>`;

  const sobre = () => `
    <section id="livia" class="about"><div class="wrap split">
      ${figura(IMAGENS.livia)}
      <div><h2 ${R}>${SOBRE.titulo}</h2>${paragrafos(SOBRE.paragrafos)}
        <ul class="pills" aria-label="Valores" ${R}>${SOBRE.valores.map(v => `<li>${v}</li>`).join('')}</ul></div>
    </div></section>`;

  const duvidas = () => `
    <section id="duvidas" class="faq"><div class="wrap">
      <h2 ${R}>Dúvidas frequentes</h2>
      ${FAQ.map(([p, r], i) => `<details class="${i === FAQ.length - 1 ? 'last' : ''}" ${R}><summary>${p}</summary><p>${r}</p></details>`).join('')}
    </div></section>`;

  const onde = () => `
    <section class="where"><div class="wrap split">
      ${figura(IMAGENS.mapa, 'mapa')}
      <div>
        <h2 ${R}>${ONDE.titulo}</h2>
        <p class="lead" ${R}>${ONDE.texto}</p>
        <p ${R}>${ONDE.consulta}</p>
        <a class="btn" ${R} style="margin-top:1.5rem" href="${wa(ONDE.mensagem)}">${ONDE.botao}</a>
      </div>
    </div></section>`;

  const rodape = () => `
    <footer id="contato"><div class="wrap">
      <h2 ${R}>${CONTATO.titulo}</h2>
      <a class="btn" ${R} href="${wa()}">${CONTATO.botao}</a>
      <div class="contacts" ${R}>
        <div><b>WhatsApp</b>${SITE.telefone}</div>
        <div><b>E-mail</b>${SITE.email}</div>
        <div><b>Instagram</b>${SITE.instagram}</div>
        <div><b>Atendimento</b>${SITE.horario}</div>
      </div>
      <p class="fine" ${R}>Lívia Gonçalves · Fisioterapeuta · ${SITE.registro} · São Paulo, SP · Este site tem caráter informativo e não substitui avaliação profissional.</p>
    </div></footer>`;

  document.getElementById('app').innerHTML =
    header() + '<main>' + hero() + frase() + cuidado() + tratamentos() + passos() +
    beneficios() + sobre() + duvidas() + onde() + '</main>' + rodape();

  // Se não houver img/hero.jpg, mostra o aviso de onde colocar a imagem
  const teste = new Image();
  teste.onerror = () => document.getElementById('topo').classList.add('sem-imagem');
  teste.src = 'img/banner.png';

  /* ==========================================================
     5. ANIMAÇÃO DE ROLAGEM
        Cada elemento aparece aos poucos ao entrar na tela e some
        aos poucos ao sair, tanto descendo quanto subindo.
     ========================================================== */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const itens = [...document.querySelectorAll('[' + R + ']')];
  const heroBg = document.getElementById('heroBg');
  const limita = (v) => Math.max(0, Math.min(1, v));
  let aguardando = false;

  function atualiza() {
    aguardando = false;
    const vh = window.innerHeight;
    const y = window.scrollY;
    const restante = document.documentElement.scrollHeight - (y + vh);
    const fimDaPagina = limita(1 - restante / 240); // faz os últimos itens aparecerem no fim

    for (const el of itens) {
      const r = el.getBoundingClientRect();
      const entra = Math.max(
        limita((vh * ANIM.entraInicio - r.top) / (vh * (ANIM.entraInicio - ANIM.entraFim))),
        fimDaPagina
      );
      const sai = limita((r.bottom - vh * ANIM.saiFim) / (vh * (ANIM.saiInicio - ANIM.saiFim)));
      const p = Math.min(entra, sai);
      const desloca = entra < 1 ? (1 - entra) * ANIM.deslocaEntrada : -(1 - sai) * ANIM.deslocaSaida;
      el.style.opacity = p.toFixed(3);
      el.style.transform = `translate3d(0, ${desloca.toFixed(1)}px, 0)`;
    }

    if (heroBg && ANIM.parallaxHero && y < vh * 1.5) {
      heroBg.style.transform = `translate3d(0, ${(y * ANIM.parallaxHero).toFixed(1)}px, 0)`;
    }
  }

  const pede = () => { if (!aguardando) { aguardando = true; requestAnimationFrame(atualiza); } };
  window.addEventListener('scroll', pede, { passive: true });
  window.addEventListener('resize', pede);
  window.addEventListener('load', pede);
  atualiza();
})();