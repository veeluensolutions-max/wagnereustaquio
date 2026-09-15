export interface IndustrySegment {
  id: string;
  name: string;
  focus: string;
}

export const INDUSTRY_EXPERIENCE: IndustrySegment[] = [
  { id: "quimica", name: "Indústria Química", focus: "Processos, balanços de massa e integridade" },
  { id: "alimentos", name: "Alimentos & Bebidas", focus: "Caldeiras, utilidades e controle de emissões" },
  { id: "mineracao", name: "Mineração", focus: "Dispersão de particulados e monitoramento" },
  { id: "celulose", name: "Papel & Celulose", focus: "Processos térmicos e efluentes industriais" },
  { id: "construcao", name: "Construção Civil & Pesada", focus: "Segurança do trabalho e impactos ambientais" },
  { id: "energia", name: "Energia & Termelétricas", focus: "Eficiência, dispersão atmosférica e caldeiras" },
  { id: "saneamento", name: "Saneamento & Recursos Hídricos", focus: "Estações de tratamento e conformidade" },
  { id: "infraestrutura", name: "Infraestrutura", focus: "Análise quantitativa de risco e confiabilidade" },
  { id: "saude", name: "Saúde & Farmacêutica", focus: "Ambientes controlados e sistemas de utilidades" },
  { id: "processos", name: "Indústria de Processos", focus: "HAZOP, NR-13 e sistemas de decisão por IA" },
];
