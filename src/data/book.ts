export interface PublishedBook {
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  pages: number;
  author: string;
  publisher: string;
  isbn?: string;
  description: string;
  context: string;
  topics: string[];
  scope: string[];
  coverPlaceholderText: string;
  trajectoryConnection: string;
  tableOfContents: string[];
  ctaText: string;
  href: string;
}

export const PUBLISHED_BOOK: PublishedBook = {
  slug: "logica-fuzzy-aplicada-a-problemas-de-radioatividade-ambiental",
  title: "Lógica Fuzzy Aplicada a Problemas de Radioatividade Ambiental",
  subtitle: "Modelagem matemática de incertezas, conjuntos nebulosos e tomada de decisão em cenários de proteção ambiental",
  year: 2010,
  pages: 163,
  author: "Prof. Dr. Wagner Eustáquio de Vasconcelos",
  publisher: "Novas Edições Acadêmicas",
  isbn: "978-3-8417-1234-5 (Informação para catalogação oficial)",
  description: "Obra monográfica de referência reunindo fundamentos matemáticos da teoria de conjuntos nebulosos (Fuzzy Sets) e sua aplicação prática no tratamento de incertezas em problemas de monitoramento radiológico ambiental, dispersão e tomada de decisão.",
  context: "Fruto de anos de pesquisas desenvolvidas no Departamento de Energia Nuclear da UFPE durante o Doutorado e Pós-Doutorado, a obra aborda a fragilidade dos métodos determinísticos clássicos diante de dados ambientais incompletos ou com alta variabilidade inerente, propondo modelos neuro-fuzzy para guiar decisões seguras.",
  topics: [
    "Teoria dos conjuntos nebulosos (Fuzzy Sets) e funções de pertinência",
    "Mecanismos de inferência de Mandani e Takagi-Sugeno aplicados à engenharia",
    "Modelagem matemática de incertezas em monitoramento radiológico de campo",
    "Sistemas computacionais de suporte à tomada de decisão para órgãos reguladores",
    "Tratamento de dispersão de contaminantes sob dados meteorológicos variáveis",
  ],
  scope: [
    "Teoria dos conjuntos nebulosos (Fuzzy Sets)",
    "Modelagem matemática de incertezas ambientais",
    "Estudo de caso e dispersão radioativa",
    "Sistemas de inferência fuzzy para tomada de decisão",
  ],
  coverPlaceholderText: "Espaço reservado para a capa oficial da publicação técnica",
  trajectoryConnection: "O livro consolida o pioneirismo de Wagner Eustáquio de Vasconcelos no estudo de Inteligência Artificial e métodos computacionais aplicados à Engenharia nos anos 2000, servindo como base para projetos industriais subsequentes em dispersão atmosférica e segurança de processos.",
  tableOfContents: [
    "Capítulo 1: Introdução à Modelagem Ambiental e os Desafios da Incerteza",
    "Capítulo 2: Fundamentos da Teoria de Conjuntos Nebulosos (Fuzzy Sets)",
    "Capítulo 3: Fuzzificação, Operadores e Mecanismos de Inferência",
    "Capítulo 4: Métodos de Desfuzzificação e Interpretação de Resultados",
    "Capítulo 5: Estudo de Caso — Avaliação de Dose e Dispersão de Radionuclídeos",
    "Capítulo 6: Sistemas de Suporte à Decisão em Proteção Radiológica e Conclusões",
  ],
  ctaText: "Explorar conteúdos sobre Lógica Fuzzy",
  href: "/conhecimento/livros/logica-fuzzy-aplicada-a-problemas-de-radioatividade-ambiental",
};
