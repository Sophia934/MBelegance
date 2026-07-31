(function() {
  // ============================================================
  // DADOS DOS PERFUMES (COM PREÇOS ATUALIZADOS)
  // ============================================================
  const perfumes = [
    { id: 1, nome: "Shagaf at Ward", marca: "Lattafa", preco: 179.90, imagem: "shagaf.webp", genero: "Feminino", categoria: "floral", descricao: "Shagaf at Ward é um perfume floral amadeirado que combina elegância e sofisticação.", notasTopo: "Rosa, Açafrão e Pimenta", notasCoracao: "Íris, Jasmim e Patchouli", notasBase: "Âmbar, Sândalo e Baunilha", fixacao: "Longa duração (8 a 10 horas)", projecao: "Moderada a forte" },
    { id: 2, nome: "Shaheen Gold", marca: "Lattafa", preco: 229.90, imagem: "shaheen.webp", genero: "Feminino", categoria: "oriental", descricao: "Shaheen Gold é um perfume floral oriental que exala luxo e opulência.", notasTopo: "Bergamota, Pêra e Pimenta Rosa", notasCoracao: "Rosa, Jasmim e Íris", notasBase: "Âmbar, Baunilha e Sândalo", fixacao: "Longa duração (10 a 12 horas)", projecao: "Forte" },
    { id: 3, nome: "Yara Rose", marca: "Lattafa", preco: 199.90, imagem: "yara.webp", genero: "Feminino", categoria: "floral", descricao: "Yara é um perfume floral frutado que celebra a feminilidade e a alegria.", notasTopo: "Laranja, Bergamota e Pêssego", notasCoracao: "Rosa, Jasmim e Lírio", notasBase: "Sândalo, Baunilha e Almíscar", fixacao: "Média (6 a 8 horas)", projecao: "Moderada" },
    { id: 4, nome: "Opulent Dubai", marca: "Lattafa", preco: 179.90, imagem: "opulent.webp", genero: "Masculino", categoria: "amadeirado", descricao: "Opulent Dubai é um perfume amadeirado oriental que captura a essência da cidade mais luxuosa.", notasTopo: "Açafrão, Cardamomo e Pimenta", notasCoracao: "Rosa, Patchouli e Íris", notasBase: "Âmbar, Sândalo e Oud", fixacao: "Longa duração (10 a 12 horas)", projecao: "Forte" },
    { id: 5, nome: "Club de Nuit", marca: "Armaf", preco: 199.90, imagem: "club.webp", genero: "Masculino", categoria: "fresco", descricao: "Club de Nuit é um perfume amadeirado aromático que combina frescor e intensidade.", notasTopo: "Limão, Pimenta e Bergamota", notasCoracao: "Jasmim, Lírio e Patchouli", notasBase: "Âmbar, Sândalo e Cedro", fixacao: "Longa duração (8 a 10 horas)", projecao: "Forte" },
    { id: 6, nome: "Asad", marca: "Lattafa", preco: 199.90, imagem: "Asad.webp", genero: "Masculino", categoria: "amadeirado", descricao: "Asad é um perfume âmbar amadeirado de Dubai, contratipo marcante que lembra o Dior Sauvage Elixir.", notasTopo: "Pimenta Preta, Tabaco e Abacaxi", notasCoracao: "Café, Patchouli e Íris", notasBase: "Baunilha, Âmbar, Madeira Seca, Benjoim e Ládano", fixacao: "Longa duração (8 a 12 horas)", projecao: "Forte e marcante" },
    { id: 7, nome: "Salvo", marca: "Maison Alhambra", preco: 189.90, imagem: "salvo.webp", genero: "Masculino", categoria: "fresco", descricao: "Salvo é um perfume amadeirado aromático que combina frescor com uma base quente e envolvente.", notasTopo: "Bergamota, Limão, Pimenta Rosa e Cardamomo", notasCoracao: "Lavanda, Sálvia, Gerânio e Íris", notasBase: "Âmbar, Sândalo, Cedro, Musk e Baunilha", fixacao: "Longa duração (8 a 10 horas)", projecao: "Moderada a forte" },
    { id: 8, nome: "Sabah al Ward", marca: "Maison Alhambra", preco: 215.00, imagem: "sabah-al-ward.webp", genero: "Feminino", categoria: "oriental", descricao: "Sabah al Ward significa 'Manhã de Rosas'. Uma fragrância elegante que combina doçura com especiarias.", notasTopo: "Rosa, Açafrão, Pimenta e Bergamota", notasCoracao: "Jasmim, Lírio, Íris e Patchouli", notasBase: "Âmbar, Sândalo, Baunilha, Oud e Almíscar", fixacao: "Longa duração (10 a 12 horas)", projecao: "Forte" },
    { id: 9, nome: "Durrat al Aroos", marca: "Maison Alhambra", preco: 245.00, imagem: "durrat-al-aroos.webp", genero: "Feminino", categoria: "oriental", descricao: "Durrat al Aroos significa 'Jóia da Noiva'. Um perfume floral oriental luxuoso e envolvente.", notasTopo: "Rosa, Açafrão, Laranja e Bergamota", notasCoracao: "Jasmim, Íris, Patchouli e Ylang-Ylang", notasBase: "Âmbar, Sândalo, Baunilha, Oud, Benjoim e Almíscar", fixacao: "Longa duração (10 a 12 horas)", projecao: "Forte e marcante" },
    { id: 10, nome: "Yara Moi Branco", marca: "Lattafa", preco: 199.90, imagem: "yara-moi-branco.jpg", genero: "Feminino", categoria: "floral", descricao: "Yara Moi Branco é uma fragrância floral fresca que combina a delicadeza das flores brancas com notas cítricas vibrantes. Perfeito para o dia a dia, transmite leveza e elegância.", notasTopo: "Bergamota, Laranja, Limão e Pêra", notasCoracao: "Jasmim, Lírio, Rosa e Íris", notasBase: "Sândalo, Baunilha, Almíscar e Cedro", fixacao: "Média a longa (6 a 8 horas)", projecao: "Moderada" }
  ];

  let cart = [];
  let currentCategory = 'todos';
  let currentFilter = '';
  let freteValor = 0;
  let userData = {};

  // ============================================================
  // ELEMENTOS DOM
  // ============================================================
  const perfumeGrid = document.getElementById('perfume-grid');
  const similarGrid = document.getElementById('similarGrid');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartTotalPrice = document.getElementById('cartTotalPrice');
  const cartCount = document.getElementById('cartCount');
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartPanel = document.getElementById('cartPanel');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const noResults = document.getElementById('noResults');
  const searchTerm = document.getElementById('searchTerm');
  const logoLink = document.getElementById('logoLink');
  const backHomeBtn = document.getElementById('backHomeBtn');
  const pageHome = document.getElementById('pageHome');
  const pageProduct = document.getElementById('pageProduct');
  const productContent = document.getElementById('productContent');
  const categoryBtns = document.querySelectorAll('.category-btn');
  const calcFreteBtn = document.getElementById('calcFreteBtn');
  const freteResult = document.getElementById('freteResult');
  const freteTotal = document.getElementById('freteTotal');
  const freteValue = document.getElementById('freteValue');

  // Elementos do modal do usuário
  const userModalOverlay = document.getElementById('userModalOverlay');
  const userModalClose = document.getElementById('userModalClose');
  const userModalCancel = document.getElementById('userModalCancel');
  const openUserModalBtn = document.getElementById('openUserModalBtn');
  const saveUserBtn = document.getElementById('saveUserBtn');

  // ============================================================
  // MÁSCARAS
  // ============================================================
  document.getElementById('customerCep').addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 5) value = value.substring(0, 5) + '-' + value.substring(5);
    this.value = value;
  });
  document.getElementById('customerPhone').addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 2) value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
    if (value.length > 10) value = value.substring(0, 10) + '-' + value.substring(10);
    this.value = value;
  });

  // ============================================================
  // MODAL DO USUÁRIO
  // ============================================================
  function openUserModal() {
    if (userData.nome) document.getElementById('customerName').value = userData.nome;
    if (userData.email) document.getElementById('customerEmail').value = userData.email;
    if (userData.telefone) document.getElementById('customerPhone').value = userData.telefone;
    if (userData.cep) document.getElementById('customerCep').value = userData.cep;
    if (userData.rua) document.getElementById('customerStreet').value = userData.rua;
    if (userData.numero) document.getElementById('customerNumber').value = userData.numero;
    if (userData.complemento) document.getElementById('customerComplement').value = userData.complemento;
    if (userData.cidade) document.getElementById('customerCity').value = userData.cidade;
    if (userData.estado) document.getElementById('customerState').value = userData.estado;
    userModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeUserModal() {
    userModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openUserModalBtn.addEventListener('click', openUserModal);
  userModalClose.addEventListener('click', closeUserModal);
  userModalCancel.addEventListener('click', closeUserModal);
  userModalOverlay.addEventListener('click', function(e) {
    if (e.target === this) closeUserModal();
  });

  // ============================================================
  // SALVAR DADOS DO USUÁRIO
  // ============================================================
  saveUserBtn.addEventListener('click', function() {
    const nome = document.getElementById('customerName').value.trim();
    const email = document.getElementById('customerEmail').value.trim();
    const telefone = document.getElementById('customerPhone').value.trim();
    const cep = document.getElementById('customerCep').value.trim();
    const rua = document.getElementById('customerStreet').value.trim();
    const numero = document.getElementById('customerNumber').value.trim();
    const complemento = document.getElementById('customerComplement').value.trim();
    const cidade = document.getElementById('customerCity').value.trim();
    const estado = document.getElementById('customerState').value.trim();

    if (!nome || !email || !telefone || !cep || !rua || !numero || !cidade || !estado) {
      alert('⚠️ Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    userData = { nome, email, telefone, cep, rua, numero, complemento, cidade, estado };
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-check"></i> Dados salvos!';
    this.style.background = '#2ecc71';
    setTimeout(() => {
      this.innerHTML = originalText;
      this.style.background = '';
      closeUserModal();
    }, 1500);
  });

  // ============================================================
  // CALCULAR FRETE
  // ============================================================
  function calcularFrete() {
    const cep = document.getElementById('customerCep').value.replace(/\D/g, '');
    if (cep.length < 8) {
      freteResult.innerHTML = '<span style="color:#e74c3c;">⚠️ Digite um CEP válido com 8 dígitos.</span>';
      return;
    }
    freteResult.innerHTML = '<span style="color:#666;">⏳ Calculando frete...</span>';
    setTimeout(() => {
      const ultimoDigito = parseInt(cep.charAt(cep.length - 1));
      let valorFrete = 0, prazo = '';
      if (ultimoDigito >= 0 && ultimoDigito <= 2) { valorFrete = 15.90; prazo = '3 a 5 dias úteis'; }
      else if (ultimoDigito >= 3 && ultimoDigito <= 5) { valorFrete = 25.90; prazo = '5 a 7 dias úteis'; }
      else if (ultimoDigito >= 6 && ultimoDigito <= 8) { valorFrete = 35.90; prazo = '7 a 10 dias úteis'; }
      else { valorFrete = 45.90; prazo = '10 a 15 dias úteis'; }
      freteValor = valorFrete;
      freteResult.innerHTML = `<div class="frete-detalhes"><span>🚚 Frete: <strong>R$ ${valorFrete.toFixed(2).replace('.', ',')}</strong></span><span>📦 Prazo: ${prazo}</span></div>`;
      freteTotal.style.display = 'flex';
      freteValue.textContent = `R$ ${valorFrete.toFixed(2).replace('.', ',')}`;
      updateTotal();
    }, 1000);
  }

  calcFreteBtn.addEventListener('click', calcularFrete);

  // ============================================================
  // CATEGORIAS
  // ============================================================
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      categoryBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.dataset.category;
      renderPerfumes(currentFilter);
    });
  });

  // ============================================================
  // NAVEGAÇÃO
  // ============================================================
  function showHome() {
    pageHome.style.display = 'block';
    pageProduct.style.display = 'none';
    pageProduct.classList.remove('active');
    document.querySelector('.carousel-container').style.display = 'block';
    document.querySelector('.categories-bar').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showProduct(productId) {
    const perfume = perfumes.find(p => p.id === productId);
    if (!perfume) return;
    pageHome.style.display = 'none';
    document.querySelector('.carousel-container').style.display = 'none';
    document.querySelector('.categories-bar').style.display = 'none';
    pageProduct.style.display = 'block';
    pageProduct.classList.add('active');
    renderProductDetail(perfume);
    renderSimilarProducts(perfume);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ============================================================
  // RENDER PÁGINA DO PRODUTO
  // ============================================================
  function renderProductDetail(perfume) {
    const generoClass = perfume.genero === 'Masculino' ? 'masculino' : 'feminino';
    productContent.innerHTML = `
      <div class="product-detail">
        <div class="product-detail-image"><img src="${perfume.imagem}" alt="${perfume.nome}" onerror="this.src=''"></div>
        <div class="product-detail-info">
          <span class="brand">${perfume.marca}</span>
          <h1>${perfume.nome}</h1>
          <span class="genero ${generoClass}"><i class="fas ${perfume.genero === 'Masculino' ? 'fa-mars' : 'fa-venus'}"></i> ${perfume.genero}</span>
          <div class="price">R$ ${perfume.preco.toFixed(2).replace('.', ',')}</div>
          <div class="description">${perfume.descricao}</div>
          <div class="notes">
            <h3><i class="fas fa-layer-group"></i> Pirâmide Olfativa</h3>
            <div class="note-item"><span class="label">Topo:</span><span class="value">${perfume.notasTopo}</span></div>
            <div class="note-item"><span class="label">Coração:</span><span class="value">${perfume.notasCoracao}</span></div>
            <div class="note-item"><span class="label">Base:</span><span class="value">${perfume.notasBase}</span></div>
          </div>
          <div class="performance">
            <div class="perf-item"><span class="label">Fixação:</span><span class="value">${perfume.fixacao}</span></div>
            <div class="perf-item"><span class="label">Projeção:</span><span class="value">${perfume.projecao}</span></div>
          </div>
          <button class="add-cart-btn" data-id="${perfume.id}"><i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho</button>
        </div>
      </div>
    `;
    const addBtn = productContent.querySelector('.add-cart-btn');
    if (addBtn) {
      addBtn.addEventListener('click', function() {
        const id = parseInt(this.dataset.id);
        const perfumeItem = perfumes.find(p => p.id === id);
        if (perfumeItem) {
          addToCart(perfumeItem);
          this.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
          this.style.background = '#2ecc71';
          setTimeout(() => {
            this.innerHTML = '<i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho';
            this.style.background = '';
          }, 1500);
        }
      });
    }
  }

  // ============================================================
  // PRODUTOS SEMELHANTES
  // ============================================================
  function renderSimilarProducts(currentPerfume) {
    const similar = perfumes.filter(p => p.id !== currentPerfume.id && p.genero === currentPerfume.genero).slice(0, 4);
    if (similar.length === 0) {
      similarGrid.innerHTML = '<p style="color:#999; text-align:center;">Nenhum produto semelhante encontrado.</p>';
      return;
    }
    similarGrid.innerHTML = similar.map(p => `
      <div class="similar-card" onclick="window.navigateToProduct(${p.id})">
        <img src="${p.imagem}" alt="${p.nome}" onerror="this.src=''">
        <div class="name">${p.nome}</div>
        <div class="brand">${p.marca}</div>
        <div class="price">R$ ${p.preco.toFixed(2).replace('.', ',')}</div>
      </div>
    `).join('');
  }
  window.navigateToProduct = function(id) { showProduct(id); };

  // ============================================================
  // RENDER LISTA DE PRODUTOS
  // ============================================================
  function renderPerfumes(filter = '') {
    let filteredPerfumes = perfumes;
    if (currentCategory !== 'todos') filteredPerfumes = filteredPerfumes.filter(p => p.categoria === currentCategory);
    if (filter.trim() !== '') {
      const searchTerm = filter.toLowerCase().trim();
      filteredPerfumes = filteredPerfumes.filter(p => p.nome.toLowerCase().includes(searchTerm) || p.marca.toLowerCase().includes(searchTerm));
    }
    if (filteredPerfumes.length === 0) {
      noResults.style.display = 'block';
      searchTerm.textContent = filter.trim() !== '' ? filter : 'esta categoria';
      perfumeGrid.style.display = 'none';
    } else {
      noResults.style.display = 'none';
      perfumeGrid.style.display = 'grid';
    }
    perfumeGrid.innerHTML = filteredPerfumes.map(p => createCard(p)).join('');
    document.querySelectorAll('.add-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const id = parseInt(this.dataset.id);
        const perfume = perfumes.find(p => p.id === id);
        if (perfume) addToCart(perfume);
      });
    });
    document.querySelectorAll('.perfume-card').forEach(card => {
      card.addEventListener('click', function(e) {
        if (e.target.closest('.add-btn')) return;
        const id = parseInt(this.dataset.id);
        showProduct(id);
      });
    });
  }

  function createCard(p) {
    const temImagem = p.imagem && p.imagem.trim() !== '' && !p.imagem.includes('IMAGEM_AQUI');
    return `
      <div class="perfume-card" data-id="${p.id}">
        <div class="perfume-img">
          ${temImagem ? `<img src="${p.imagem}" alt="${p.nome}" onerror="this.parentElement.innerHTML='<div class=img-placeholder><i class=fas fa-image></i><span>Imagem não encontrada</span></div>'">` : `<div class="img-placeholder"><i class="fas fa-image"></i><span>Adicione a imagem</span></div>`}
          ${!temImagem ? '<div class="badge-falta-imagem">⚠️ SEM IMAGEM</div>' : ''}
        </div>
        <div class="perfume-name">${p.nome}</div>
        <div class="perfume-brand">${p.marca}</div>
        <div class="perfume-price">R$ ${p.preco.toFixed(2).replace('.', ',')}</div>
        <button class="add-btn" data-id="${p.id}">Adicionar</button>
      </div>
    `;
  }

  // ============================================================
  // PESQUISA - ABRE PÁGINA DO PRODUTO
  // ============================================================
  function performSearch() {
    const searchValue = searchInput.value.trim();
    
    if (searchValue === '') {
      showHome();
      renderPerfumes('');
      return;
    }

    const found = perfumes.find(p => 
      p.nome.toLowerCase().includes(searchValue.toLowerCase()) || 
      p.marca.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (found) {
      showProduct(found.id);
      searchInput.value = '';
    } else {
      alert('Produto não encontrado. Tente novamente.');
      renderPerfumes(searchValue);
    }
  }

  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') performSearch(); });
  searchInput.addEventListener('keydown', function(e) { if (e.key === 'Escape') { this.value = ''; performSearch(); this.blur(); } });

  // ============================================================
  // CARRINHO
  // ============================================================
  function addToCart(perfume) {
    const existing = cart.find(item => item.id === perfume.id);
    if (existing) { existing.quantidade += 1; } 
    else { cart.push({ id: perfume.id, nome: perfume.nome, marca: perfume.marca, preco: perfume.preco, quantidade: 1 }); }
    updateCartUI();
    openCartPanel();
  }

  function removeFromCart(id) { cart = cart.filter(item => item.id !== id); updateCartUI(); }

  function updateTotal() {
    const subtotal = cart.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    const total = subtotal + freteValor;
    cartSubtotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    cartTotalPrice.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  }

  function updateCartUI() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantidade, 0);
    cartCount.textContent = totalItems;
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `<div class="empty-cart"><i class="fas fa-scent"></i><p>Seu carrinho está vazio</p></div>`;
      freteTotal.style.display = 'none';
      freteValor = 0;
    } else {
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-info"><span class="cart-item-name">${item.nome}</span><span class="cart-item-brand">${item.marca} · ${item.quantidade}x</span></div>
          <span class="cart-item-price">R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</span>
          <button class="cart-item-remove" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
        </div>
      `).join('');
      document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', function() { const id = parseInt(this.dataset.id); removeFromCart(id); });
      });
    }
    updateTotal();
  }

  function openCartPanel() { cartPanel.classList.add('open'); cartOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeCartPanel() { cartPanel.classList.remove('open'); cartOverlay.classList.remove('open'); document.body.style.overflow = ''; }

  openCartBtn.addEventListener('click', openCartPanel);
  closeCartBtn.addEventListener('click', closeCartPanel);
  cartOverlay.addEventListener('click', closeCartPanel);

  // ============================================================
  // LOGO - VOLTAR AO INÍCIO
  // ============================================================
  logoLink.addEventListener('click', function() {
    searchInput.value = '';
    currentFilter = '';
    currentCategory = 'todos';
    categoryBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('.category-btn[data-category="todos"]').classList.add('active');
    renderPerfumes('');
    showHome();
  });
  backHomeBtn.addEventListener('click', showHome);

  // ============================================================
  // CARROSSEL
  // ============================================================
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.length;
  function goToSlide(index) { slides.forEach(slide => slide.classList.remove('active')); dots.forEach(dot => dot.classList.remove('active')); slides[index].classList.add('active'); dots[index].classList.add('active'); currentSlide = index; }
  function nextSlide() { const next = (currentSlide + 1) % totalSlides; goToSlide(next); }
  function prevSlide() { const prev = (currentSlide - 1 + totalSlides) % totalSlides; goToSlide(prev); }
  document.getElementById('nextBtn').addEventListener('click', nextSlide);
  document.getElementById('prevBtn').addEventListener('click', prevSlide);
  dots.forEach(dot => { dot.addEventListener('click', function() { const slideIndex = parseInt(this.dataset.slide); goToSlide(slideIndex); }); });
  let autoPlayInterval = setInterval(nextSlide, 5000);
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.addEventListener('mouseenter', function() { clearInterval(autoPlayInterval); });
  carouselContainer.addEventListener('mouseleave', function() { autoPlayInterval = setInterval(nextSlide, 5000); });

  // ============================================================
  // MODAL DE PAGAMENTO
  // ============================================================
  const paymentModalOverlay = document.getElementById('paymentModalOverlay');
  const paymentModalClose = document.getElementById('paymentModalClose');
  const paymentSummary = document.getElementById('paymentSummary');
  const paymentConfirmBtn = document.getElementById('paymentConfirmBtn');
  const paymentCancelBtn = document.getElementById('paymentCancelBtn');

  function openPaymentModal() {
    if (cart.length === 0) { alert('Seu carrinho está vazio.'); return; }
    if (!userData.nome || !userData.email || !userData.telefone || !userData.cep) {
      alert('⚠️ Por favor, cadastre seus dados clicando no ícone de usuário (👤) antes de finalizar a compra.');
      openUserModal();
      return;
    }

    const total = cart.reduce((acc, item) => acc + (item.preco * item.quantidade), 0) + freteValor;
    paymentSummary.innerHTML = `
      <div class="customer-summary">
        <h4><i class="fas fa-user"></i> Dados do Cliente</h4>
        <p><strong>Nome:</strong> ${userData.nome}</p>
        <p><strong>E-mail:</strong> ${userData.email}</p>
        <p><strong>Telefone:</strong> ${userData.telefone}</p>
        <p><strong>Endereço:</strong> ${userData.rua}, ${userData.numero}${userData.complemento ? ', ' + userData.complemento : ''} - ${userData.cidade}/${userData.estado} - CEP: ${userData.cep}</p>
      </div>
      <div class="payment-items">${cart.map(item => `<div class="payment-item"><span>${item.nome} (${item.quantidade}x)</span><span>R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</span></div>`).join('')}</div>
      <div class="payment-total"><strong>Subtotal: </strong><strong>R$ ${cart.reduce((acc, item) => acc + (item.preco * item.quantidade), 0).toFixed(2).replace('.', ',')}</strong></div>
      <div class="payment-total"><strong>Frete: </strong><strong>R$ ${freteValor.toFixed(2).replace('.', ',')}</strong></div>
      <div class="payment-total total-final"><strong>Total: </strong><strong>R$ ${total.toFixed(2).replace('.', ',')}</strong></div>
    `;
    document.querySelectorAll('.payment-option-details').forEach(el => el.style.display = 'none');
    document.querySelectorAll('input[name="payment"]').forEach(el => el.checked = false);
    paymentModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePaymentModal() { paymentModalOverlay.classList.remove('active'); document.body.style.overflow = ''; }
  paymentModalClose.addEventListener('click', closePaymentModal);
  paymentCancelBtn.addEventListener('click', closePaymentModal);
  paymentModalOverlay.addEventListener('click', function(e) { if (e.target === this) closePaymentModal(); });

  document.querySelectorAll('.payment-option-radio input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
      document.querySelectorAll('.payment-option-details').forEach(el => el.style.display = 'none');
      const parent = this.closest('.payment-option');
      const details = parent.querySelector('.payment-option-details');
      if (details) details.style.display = 'block';
    });
  });

  document.getElementById('copyPixBtn').addEventListener('click', function() {
    const pixCode = document.querySelector('.pix-code span');
    if (pixCode) {
      navigator.clipboard.writeText(pixCode.textContent).then(() => {
        this.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        setTimeout(() => { this.innerHTML = '<i class="fas fa-copy"></i> Copiar código PIX'; }, 2000);
      });
    }
  });

  paymentConfirmBtn.addEventListener('click', function() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    if (!selectedPayment) { alert('Selecione uma forma de pagamento.'); return; }
    const total = cart.reduce((acc, item) => acc + (item.preco * item.quantidade), 0) + freteValor;
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
    this.disabled = true;
    setTimeout(() => {
      alert(`✅ Pedido finalizado com sucesso!\n\n👤 Cliente: ${userData.nome}\n📦 Endereço: ${userData.rua}, ${userData.numero} - ${userData.cidade}/${userData.estado}\n📦 Frete: R$ ${freteValor.toFixed(2).replace('.', ',')}\n💰 Total: R$ ${total.toFixed(2).replace('.', ',')}\n\nObrigado por comprar na MB ELEGANCE!`);
      cart = [];
      freteValor = 0;
      updateCartUI();
      closePaymentModal();
      closeCartPanel();
      this.innerHTML = '<i class="fas fa-check-circle"></i> Confirmar Pagamento';
      this.disabled = false;
      freteResult.innerHTML = '';
      freteTotal.style.display = 'none';
    }, 1500);
  });

  checkoutBtn.addEventListener('click', openPaymentModal);

  // ============================================================
  // INICIALIZAR
  // ============================================================
  renderPerfumes();
  updateCartUI();

})();