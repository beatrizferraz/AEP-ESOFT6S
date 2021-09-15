                                 /* ===Problema Informacao === */
informacao(mancha_angular, Nome, Caracteristica, Descricao, Tratamento):-problema(mancha_angular, Nome),
                                                                problema_caracteristica(mancha_angular, Caracteristica),
                                                                problema_descricao(mancha_angular, Descricao),
                                                                problema_tratamento(mancha_angular, Tratamento).

informacao(mancha_de_micosferela, Nome, Caracteristica, Descricao, Tratamento):-problema(mancha_de_micosferela, Nome),
                                                                       problema_caracteristica(mancha_de_micosferela, Caracteristica),
                                                                       problema_descricao(mancha_de_micosferela, Descricao),
                                                                       problema_tratamento(mancha_de_micosferela, Tratamento).

informacao(mancha_de_diplocarpon, Nome, Caracteristica, Descricao, Tratamento):-problema(mancha_de_diplocarpon, Nome),
                                                                       problema_caracteristica(mancha_de_diplocarpon, Caracteristica),
                                                                       problema_descricao(mancha_de_diplocarpon, Descricao),
                                                                       problema_tratamento(mancha_de_diplocarpon, Tratamento).

informacao(mancha_de_dendrofoma, Nome, Caracteristica, Descricao, Tratamento):-problema(mancha_de_dendrofoma, Nome),
                                                                      problema_caracteristica(mancha_de_dendrofoma, Caracteristica),
                                                                      problema_descricao(mancha_de_dendrofoma, Descricao),
                                                                      problema_tratamento(mancha_de_dendrofoma, Tratamento).


informacao(podridao_de_phythophtora, Nome, Caracteristica, Descricao, Tratamento):-problema(podridao_de_phythophtora, Nome),
                                                                          problema_caracteristica(podridao_de_phythophtora, Caracteristica),
                                                                          problema_descricao(podridao_de_phythophtora, Descricao),
                                                                          problema_tratamento(podridao_de_phythophtora, Tratamento).

informacao(mofo_cinzento, Nome, Carac, Descricao, Tratamento):-problema(mofo_cinzento, Nome),
                                                               problema_caracteristica(mofo_cinzento, Carac),
                                                               problema_descricao(mofo_cinzento, Descricao),
                                                               problema_tratamento(mofo_cinzento, Tratamento).

informacao(oidio, Nome, Carac, Descricao, Tratamento):-problema(oidio, Nome),
                                                       problema_caracteristica(oidio, Carac),
                                                       problema_descricao(oidio, Descricao),
                                                       problema_tratamento(oidio, Tratamento).

informacao(faixa_das_nervuras, Nome, Caracteristica, Descricao, Tratamento):-problema(faixa_das_nervuras, Nome),
                                                                    problema_caracteristica(faixa_das_nervuras, Caracteristica),
                                                                    problema_descricao(faixa_das_nervuras, Descricao),
                                                                    problema_tratamento(faixa_das_nervuras, Tratamento).


                                 /* === PRAGA / DOENCA === */

problema(mancha_angular, "Mancha Angular").
problema(mancha_de_micosferela, "Mancha de Micosferela").
problema(mancha_de_diplocarpon, "Mancha de Diplocarpon").
problema(mancha_de_dendrofoma, "Mancha de Dendrofoma").
problema(podridao_de_phythophtora, "Podridao de Phythophtora").
problema(mofo_cinzento, "Mofo Cinzento").
problema(oidio, "Oidio").
problema(faixa_das_nervuras, "Faixa das Nervuras").


                                /* === CARACTERISTICAS === */

/* Bacterias */

problema_caracteristica(mancha_angular, " manchas marrom-avermelhada").
/* Fungos */

problema_caracteristica(mancha_de_micosferela, "manchas marrom com centro acizentado").

problema_caracteristica(mancha_de_diplocarpon, "manchas purpuras sem o centro branco").

problema_caracteristica(mancha_de_dendrofoma, "manchas com 5mm a 25mm de diametro").

problema_caracteristica(podridao_de_phythophtora, "envoltos por fungos de cor branca").

problema_caracteristica(mofo_cinzento, "massa cinzenta sobre superficie").

problema_caracteristica(oidio, "frutos sem coloracao" ).

/* Virus */
problema_caracteristica(faixa_das_nervuras, "manchas cloroticas ao longo das nervuras das folhas").

                                         /* === DESCRICAO  ===*/

problema_descricao(mancha_angular, " Causada pela bacteria Xanthomonas fragarie, apresenta pequenas manchas angulares de coloracao verde-clara na face inferior dos foliolos, podendo evoluir ate se tornarem manchas marrom-avermelhadas expelindo um liquido da bacteria").

problema_descricao(mancha_de_micosferela, " Doença comum podendo se encontrada em qualquer lugar que ocorra o cultivo, é causada pelo fungo Mycospharella fragaria, que ataca os foliolos dos morangos, a principio apresentando pequenas manchas purpuras e arredondadas, porem que podem se desenvolver adquirindo um coloracao marrom com centro acizentado, e em caso de situacoes mais severas as manchas podem se propagar por toda a folha afetando pecíolos, calices e frutos").

problema_descricao(mancha_de_diplocarpon, " Uma doenca ocasionada  pelo fungo Diplocarpon earliana, muito parecida com a microsfarela, porem essa doença pode danificar folhas, pecíolos, pedúnculos, cálices florais e estolões. Apresentando principalmente manchas irregurales de coloracao purpura").

problema_descricao(mancha_de_dendrofoma, " Doenca causada pelo fungo Dendrophoma obscurans, é de importancia secundaria, ocorrendo no final do cilco de cultivo principalmente em folhas velhas e quando se tem temperaturas elevadas, apresentando manchas de 5 a 25 mm com centros marrom ou castanhos.").

problema_descricao(podridao_de_phythophtora, " Em solos mais pesado e sujeitos encharcamento, o fungo Phytophthora fragariae se apresenta atacando calices e pendunculos que apresentam uma cor marrom e sabor amargo").

problema_descricao(mofo_cinzento, " Ocasionada pelo fungo Botrytis cinerea, apresenta um bolor cinza na lesao infectada, onde apos a colheita pode aparecer sinais de podridao na fruta que foi colhida").

problema_descricao(oidio, " Ocasionada quando o plantio do monrango ocorre em local de clima quente e seco, a bacteria Sphaerotheca macularis faz com que inicialmente as folhas apresente em sua parte inferior manchas esbranquiçadas, qu podem se desenvolver agredindo estaloesm flores e frutos.").

problema_descricao(faixa_das_nervuras, " Virus Strawberry vein banding virus ocasiona o aparecimento de manchas cloroticas ao longo das nervuras nas novas folhas e tambem apresenta mosqueado nas folhas mais velhas da planta, podendo fazer com que a planta tenha seu crescimento danificado o que ira fazer com que os cultivadore tenham perda severa").


                                    /* === Tratamento === */

problema_tratamento(mancha_angular, "Utilizacao de mudas saudaveis").

problema_tratamento(mancha_de_micosferela, "Utilizar fungicidas registradas no MAPA para o controle da praga, como dodine, oxicloreto de cobre e tiofanato metílico").

problema_tratamento(mancha_de_diplocarpon, "Utilizacao de fungicidas registrados no MAPA, exposicao ao sol e evitar a utilizacao de adubos").

problema_tratamento(mancha_de_dendrofoma, "Utilizacoa de fungicidas registrados no MAPA para controle, mudas sem a doenca, utilizacao de cobertura plastica para o plantio").

problema_tratamento(podridao_de_phythophtora, "utilizar canteiros altos e nivelados e utilizacao de fungicidas, evitando locais de alta umidade").

problema_tratamento(mofo_cinzento, "limpeza e destruicao semanal de folhas, flores e frutos com sintomas, utilizacoa de fungicidas, optar pelo plantio em climas mais quentes").

problema_tratamento(oidio, "utilizacao de fungicidas, adquirir mudas resistente a doenca").

problema_tratamento(faixa_das_nervuras, "A Faixa de Nervura por se tratar de uma virose e recomendado a utilizacao de platas sem sintomas, utilizar inseticidas registrados no MAPA, nao deixar que sobre restos de plantas de cultivos passados").





