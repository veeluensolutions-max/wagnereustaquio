export interface TeachingData {
  title: string;
  headline: string;
  description: string;
  courses: string[];
  disciplines: string[];
  discreetHighlight: string;
}

export const TEACHING_DATA: TeachingData = {
  title: "Docência e Ensino de Engenharia",
  headline: "Ensinar também faz parte da trajetória.",
  description: "Ao longo da carreira acadêmica, Wagner atuou em disciplinas de graduação e pós-graduação em Engenharia Química, Engenharia Ambiental e Engenharia de Produção, além de sólida experiência em gestão acadêmica, orientação de pesquisas e coordenação de cursos.",
  courses: [
    "Engenharia Química",
    "Engenharia Ambiental",
    "Engenharia de Produção",
    "Engenharia de Segurança do Trabalho",
  ],
  disciplines: [
    "Modelagem e Simulação",
    "Segurança e Confiabilidade",
    "Pesquisa Operacional",
    "Fenômenos de Transporte",
    "Instrumentação e Controle",
    "Vasos de Pressão",
    "Métodos Computacionais",
  ],
  discreetHighlight: "Reconhecido ao longo dos anos por diferentes turmas de Engenharia.",
};
