Todos os Dados Inseridos no Formuário:
Form 1:
Selecione o Serviço: {service} (se o serviço for Inspeção abre o campo de Tipo de Inspeção) "Inspeção de Caldeiras"
{"Qual o tipo de Inspeção: {type}"} "Extraordinária"
Selecione o Cliente: {client} "Ecapital - ANAMA""
Descreva o motivo da Inspeção {reason} "Estou testando"
Form2:
Data de Inspeção: {inspection_date} "3/11/2023"
Hora de Inicio: {start_hour} "15:55"
Hora de Término: {end_hour} "16:55"
Validade da Inspeção: {validate_time_inspection} "1 mes"
Data da Próxima Inspeção: {inspection_next_date} "4/11/2023"
Form3:
Engenheiro Responsável: Waltemir Teixeira Júnior {responsible_engineer}
Registro nacional do Engenheiro: 140637118-1 {responsible_national_register}
Nome do operador de Caldeira: {operator_name} "Luke"
Operador se enquadra na NR13? sim/não {operator_able_in_nr13{true or false}} "Não"
textarea {operator_able_in_nr13_description} "estou testando passo 3"
Form4:
Title: Identificação da Caldeira
Fabricante: {boiler_maker} "GM"
Marca: {boiler_brand} "Chevrolet"
tipo:(select pre-selecionado){boiler_type} "Fogotubular Horizontal"
Ano de Fabricação: {boiler_year_of_manufacture} "2023"
Modelo: {boiler_model} "Corvett"
Form5:
Pressão Máxima de trabalho Admissível:(é inserido em kgf/cm³ e já alterado para lbf/in²) {boiler_maximum_pressure} "1""14.22"
Combustível:(select de opções) "Lenha" {boiler_fuel}
Pressão de Operação:(é inserido em kgf/cm³ e já alterado para lbf/in²) "2""28.44" {boiler_operation_pressure}
Série: {boiler_serial_number} "01"
Capacidade: {boiler_capacity} "3" Kgv/h
Form6:
Title: Identificação da Caldeira
Pressão Teste Hidrostático: (é inserido em kgf/cm³ e já alterado para lbf/in²) "1.50" "21.33" {boiler_pressure_test} ---- Verificar se agora vai puxar certo
Categoria da Caldeira: A/B "A" {boiler_category}
Form7:
Title: Dados Estruturais
Superfície de Aquecimento: {structure_heating_surface} m² "04"
Tipo de Fornalha: { {furnace_type}
Refratária: {abre: Title: Dimensões {
Largura: {dimension_width} mm, "0101" mm
Comprimento: {dimension_length} mm, "0202" mm
Altura: {dimension_height} mm, "0303"mm
}{
Refrigerada: abre + um input: Informações a Serem preenchidas (abre um select para escolher Comprimento,Altura e Largura / Diâmetro e Altura / Diâmetro e Comprimento - abre as opões de acordo com o que escolheu ){
Diametro: {dimension_diameter}
Comprimento: {dimension_length}
}
}}
}
Form8:
Diametro do Espelho: {mirror_diameter} mm "0.01"
Espessura do Espelho: {mirror_thickness} pol "0.02"
Comprimento livre sem stays ou tubos: {always_length} mm "0.03"
Comprimento do corpo: {body_length} mm "0.04"
Diâmetro do Corpo: {body_diameter} mm "0.05"
Espessura do corpo: {body_thickness} pol "0.06"
Form9:
Material do Corpo: {body_material} "ASTM A285 GRC"
Certificado do Fabricante: Sim/Não {body_manufacture_certificate} "Sim"
Quantidade de Tubos: {tube_quantity} Un "11"
Comprimento do Tubo: {tube_length} mm "22"
Diâmetro do Tubo: {tube_diameter} pol "33"

Form10:
Espessura do Tubo: {tube_thickness} mm "44"
Material dos Tubos: ASTM A 178 {tube_material}
Certificado do Fabricante: Sim/Não {tube_manufacture_certificate} "Não"
Tipo de Tiragem: Natural/Forçada "Natural" {circulation_type} // está como boolean, natural === True
Número de Fusíveis de Segurança: {fuses_security_quantity} "55"
Form11:
Title: Exames Realizados
// Arrumar ainda a Table
Table: Sim/Não -> Tudo Sim "{tests} Array(20)" -----
O prontuário foi encontrado completo e em dia? {}
O prontuário encontra-se de acordo com item 13.4.1.5A da NR13? {}
O prontuário precisa ser restituído? {}
O prontuário precisa ser adequado? {}
Há projeto de alteração e reparo? {}
Houve acesso ao livro de registro de segurança? {}
O livro de registro de segurança é virtual? {}
O registro de segurança encontra-se atualizado? {}
Há registro de inspeção periódicas regulares no livro de inspeção? {}
Há certificados de calibração dos dispositivos de segurança? {}
Os certificados possuem dispositivos de calibração válidos? {}
Os dispositivos estão dentro do prazo de validade? {}
A presente inspeção foi realizada no prazo para isso fixada? {}
As recomendações anteriores foram postas em prática? {}
Há registro de inspeção periódicas regulares no livro de inspeção? {}
Há certificados de calibração dos dispositivos de segurança? {}
Os certificados possuem dispositivos de calibração válidos? {}
Os dispositivos estão dentro do prazo de validade? {}
A presente inspeção foi realizada no prazo para isso fixada? {}
as recomendações anteriores foram postas em prática? {}
Form12:
Title: Exame Realizados
Adicione observações sobre o prontuário: TextBox {observation} "Teste passo 12"
Anexar foto do Prontuário: Image {photo_records} "ads.png" // verificar img
Anexar foto do Livro de Registro: Image {photo_register_book} "Funil.png" // verificar img
Form13:
Title: Exame Externo do Equipamento
Table: "Tudo Não" "{external_exams} {Array(17)}"
Há placa de Identificação da caldeira em local visível? {}
A placa possui os requisitos mínimos previstos na NR 13.4.1.3? {}
Há indicador da categoria da caldeira afixado em local visível? {}
A caldeira funciona normalmente? {}
A caldeira satisfaz as condições de segurança constantes na NR13? {}
A caldeira satisfaz as condições observadas neste exate? {}
Foi observado alguma anomalia capaz de prejudicar a segurança? {}
Há algum vazamento? {}
O encapamento se encontra em perfeito estado? {}
Há riscos de queimadura por falta de encapamento? {}
Há sinais de deteriorização aparente? {}
A deteriorização interfere de forma imediata no funcionamento? {}
As válvulas, registros e tubulação encontram-se em bom estado? {}
A chaminé de caldeira encontra-se em bom estado? {}
As passagens dianteiras e traseiras, estão em bom estado? {}
A base de caldeira encontra-se em bom estado? {}
Há necessidade de pintura da caldeira? {}
Form14:
Title: Exame Externo do Equipamento
Observações: TexteArea {observation_external_equipment} "Teste passo 14"
Anexar foto da placa de identificação: Image {photo_identification_plate} // Verificar img
Anexar foto da caldeira? Image {photo_boiler} // Verificar img
Form15:
Anexar fotos Extras: Image {boiler_extra_photo} // Verificar img
Legenda para fotos Extras: TextArea {boiler_extra_photo_observation} "Teste passo 15"
Form16:
Title: Exame Interno do Equipamento
Table: "Tudo SIM" "{intern_exam_of_equipment} {Array(11)}"
A caldeira apresenta alguma anomalia internamene? {}
Está com os tubos em bo estado? {}
Está com os tubos devidamente limpos? {}
Os tubos são mandrilhados? {}
Há necessidade de remandilhamento? {}
A fornalha encontra-se em bom estado? {}
está devidamente limpa? {}
As pedras de retorno de chama estão em bom estado? {}
As passagens da caldeira estão em bom estado? {}
Internamente a caldeira satisfaz a NBR16035-1/22 e NR13? {}
Foi encontrado algo capaz de prejudicar a segurança? {}
Form17:
Title: Exame Interno do Equipamento
Observações: TextArea {observation_internal_equipment
} "Teste passo 17"
Anexar foto do Tubo: Image {photo_tube} // Verificar img
Anexar foto da Fornalha: Image {photo_furnace} // Verificar img
Anexar foto do Exame Interno da Caldeira: Image {photo_internal_examination_boiler} // Verificar img
Form18:
Title> Exame Interno do Equipamento
Anexar fotos Extras: Image {internal_examination_extra_photo} // Verificar img
Legenda para fotos Extras: TextArea {internal_examination_extra_photo_observation} "Teste passo 18"
// Já altera titulo
Form19:
Title Exame do Local de Instalação da Caldeira
Table: "Tudo Não" "{local_installation_boiler} {Array(11)}"
Possui projeto de instação? {}
O projeto atende aos requisitos mínimos da NR13? {}
Atende ao item 13.4.2.3 ou 13.4.2.4 da NR13? {}
Constitui prédio separado de material resistente ao calor? {}
Dispõe de pelo menos 2 saídas amplas e sinalizadas? {}
Dispõe de ventilação permanente? {}
Entradas de ar não bloqueáveis? {}
Dispõe de acesso fácil e seguro? {}
Tem sistema de captação e lançamento de gases? {}
Possui relatório de emissão de gases? {}
Dispõe de iluminação segundo normas vigentes? {}
Form20:
Observações: TexteArea {observation_boiler_installation} "Teste passo 20"
Anexar foto da casa da caldeira: Image {photo_boiler_room_location} // Verificar img
// Novo Titulo
Form21:
Title: Aferições do Manômetro
Número de ordem de calibração: {calibration_order} "21"
Marca: {safety_tag} "21 A"
Diâmetro: {safety_diameter} pol "2121"
Capacidade: {safety_thickness} Kgf/cm3 "212121"
Anexar foto do manômetro: Image {photo_manometer} // Verificar img
Form22:
Table: "Tudo Sim" "{security_measurement} {Array(5)}"
O manômetro foi calibrado? {}
Funciona normalmente? {}
Há algum problema no mesmo? {}
Há sifão para proteção do mecanismo interno? {}
O vidro encontra-se com visibilidade adequada? {}
Observações: TextArea {observation_assessment_notes} "Teste passo 22
// Novo Titulo
Form23:
Title: Aferições do Injetor
N° de série do injetor: {assessment_injector_series} "2301"
Marca: {safety_benchmarks} "23 A"
Diâmetro: {safety_measurements_diameter} pol "2302"
Form24:
Table: "Tudo Não" "{security_measurement_continuation} {Array(5)}"
O injetor de valor foi aferido? {}
Funciona normalmente? {}
Há algum problema no mesmo? {}
Há sistema de retenção para proteção do mecanismo interno? {}
A ligação de água foi feita corretamente? {}
Observações: TextArea {observation_assessment_notes_two} "Teste passo 24"
Anexar foto do Injetor: Image {photo_injector} // Verificar img arrumar
// Novo Titulo
Form25:
Title: Alimentação Elétrica
Selecione a quantidade de bombas:(1 ou 2):
{se for 1 só aparecer bomba 1}
Bomba 1
Marca: {}
Estágios: {}
Modelo: {}
Potência: {}
{se for duas, aparecer 1 e 2}
Bomba 1
Marca: {pump_brand1} "25 A"
Estágios: {stage_pump1} "25 AA"
Modelo: {model_pump1} "25 AAA"
Potência: {power_pump1} cv "2525"
Bomba 2
Marca: {pump_brand2} "25 B"
Estágios: {stage_pump2} "25 BB"
Modelo: {model_pump2} "25 BBB"
Potência: {power_pump2} cv "2505"
Anexar foto da(s) bomba(s): Image {photo_power_supply} // Verificar img
Form26:
Title: Aferições da Alimentação Elétrica
Table: "Tudo Não" {power_supply} {Array(5)}
Foi realizado? {}
A bomba encontra-se funcionando normalmente? {}
É suficiente para suportar a pressão de uso do equipamento? {}
Foi observada alguma anomalia capaz de prejudicar a segurança? {}
Houve algum outro problema relacionado á pressão aplicada? {}
Observações: TextArea {observation_power_supply} "Teste passo 26"
// novo titulo
Form27:
Title: Aferição do conjunto indicador de Nível
Marca: {brand_level_indicator_set} "26 A
Comprimento do vidro: {lenght_level_indicator_set} "26"
Diâmetro do vidro: {diameter_level_indicator_set} "2601"
Anexar foto do conjunto indicador de nível: Image {photo_level_indicator_set} // Verificar img
Form28:
Table: "Tudo Não" {measurements_level_indicator_set} {Array(5)}
O conjunto indicador de nível está em condições de uso? {}
A válvula de descarga funciona normalmente? {}
Há necessidade de troca do conjunto? {}
O vidro encontra-se em condições de uso? {}
As borrachas de devação encontram-se em condições de uso? {}
Observações: TextArea {observation_measurements_level_indicator_set} "Teste passo 28"
// novo Titulo
Form29:
Selecione a quantidade de válvula: (1, 2 ou 3)
Válvula 1:
N° de ordem de calibração: {brand_valve1} "2901" \_\_\_ verificar no form
Diâmetro: {diameter_valve1} pol "2901.1"
Vazão: {lenght_valve1} kgv/h "2901.2"
Valvula 2:
N° de ordem de calibração: {brand_valve2} "2902"
Diâmetro: {diameter_valve2} pol "2902.1"
Vazão: {lenght_valve2} kgv/h "2902.2"
Válvula 3:
N° de ordem de calibração: {brand_valve3} "2903"
Diâmetro: {diameter_valve3} pol "2903.1"
Vazão: {lenght_valve3} kgv/h "2903.2"
Anexar foto das Válvulas: Image {photo_level_indicator_set26} // Verificar img
Form30:
Há redundância de válvula de segurança? Sim/Não "Sim" {safety_valve_redundancy}
Table: "Tudo SIm" {} {Array()}
Valvula 1 {security_measurement_continuationValve1}
Funciona normalmente? {}
Foram desmontadas? {}
Foi observada alguma anomalia? {}
Foram consertadas? {}
Foram substituidas? {}
Foram reguladas? {}
Pressão de abertura da válvula de segurança: (Input para escrever) {openValve1} Kgf/cm² "3001"
Pressão de fechamento: (Input para escrever) {closeValve1} Kgf/cm² "3002"
Valvula 2 {security_measurement_continuationValve2}
Funciona normalmente? {}
Foram desmontadas? {}
Foi observada alguma anomalia? {}
Foram consertadas? {}
Foram substituidas? {}
Foram reguladas? {}
Pressão de abertura da válvula de segurança: (Input para escrever) {openValve2} Kgf/cm² "3003"
Pressão de fechamento: (Input para escrever) {closeValve2} Kgf/cm² "3004"
Valvula 3 {security_measurement_continuationValve3}
Funciona normalmente? {}
Foram desmontadas? {}
Foi observada alguma anomalia? {}
Foram consertadas? {}
Foram substituidas? {}
Foram reguladas? {}
Pressão de abertura da válvula de segurança: (Input para escrever) {openValve3} Kgf/cm² "3005"
Pressão de fechamento: (Input para escrever) {closeValve3} Kgf/cm² "3006"
Observações: TextArea {observation_safety_valve_redundancy} "teste passo 30"
// Novo Titulo
Form31:
TItle:Aferições de Comandos e Dispositivos de Controle elétrico/Eletrônicos
Anexar foto do painel elétrico: Image {boiler_house_photo} // Verificar img
Observações: TextArea {observation_assessment_notes_twentytwo} " Teste passo 31"
Form32:
Table: "Tudo Naõ" {eletrical_control_measurements} {Array(6)}
Há painel de comando para controle automático da caldeira? {}
Funciona normalmente? {}
Há peças de reposição? {}
Há redundância dos sistemas de segurança do painel? {}
Há algum outro dispositivo de eletrònico? {}
Funciona normalmente? {}
// Novo Titulo
Form33:
Title: Aferições do Sistema de Descarga de Fundo
Anexar foto da descarga de fundo: Image {background_download_photo} // Verificar img
Observações: TexteArea {observation_bottom_discharge_system} "Teste passo 33"
Form34:
Table: "Tudo Sim" {discharge_system_measurements} {Array()}
Há sistema de descarga de fundo? {}
Há número suficiente de desgargas? {}
Funciona(m) normalmente? {}
A(s) desgarga(s) é(são) automática(s)?
As descargas estão sendo feitas no tempo correto? {}
// Novo Titulo
Form35:
Title: Qualidade da Agua
<FileLabel htmlFor="photo_water_tank">
<FileLabel htmlFor="photo_water_tank">
Anexar foto do sistema: Image {photo_water_tank} // Verificar img
Table: "Tudo Não" {water_quality} {Array(3)}
Há tratamento de água? {}
O tratamento está sendo feito corretamente? {}
Há sinla de calcificação em partes ou peças? {}
PH da Agua: (Input para escrever) {water_ph} ph "3535"
Observações: TexteArea {observation_water_quality} "Teste passo 35"
// novo Titulo
Form36:
Title: Ensaios Hidrostático
Table: "Tudo SIm" {hydrostatic_tests} {array(6)}
Foi realizado? {}
A bomba encontra-se funcionando normalmente? {}
É suficiente para suportar a pressão de uso do equipamento? {}
Foi observada alguma anomalia capaz de prejudicar a segurança? {}
A caldeira suportou satisfatoriamente a prova? {}
Houve algum outro problema relacionado á pressão aplicada? {}
Observações: TexteArea {observation_hydrostatic_tests} "Teste passo 36"
Form37:
Pressão de prova aplicada: {test_pressure} Kgf/cm² "3701"
Tempo: {test_time} min "3702"
Procedimento: TextArea {test_procedure} "procedimento passo 37"
// novo titulo
Form38:
Title: Ensaio por Acumulação
Table: "Tudo Sim" {accumulation_tests} {Array(6)}
Foi realizado? {}
A bomba encontra-se funcionando normalmente? {}
É suficiente para suportar a pressão de uso do equipamento? {}
Foi observada alguma anomalia capaz de prejudicar a segurança? {}
As válvulas suportaram satisfatoriamente a prova? {}
Houve algum outro problema relacionado á pressão aplicada? {}
Form39:
Observações: TexteArea {observation_accumulation_tests} "obs passo 39"
Pressão de prova aplicada: {test_pressure_accumulation} Kgf/cm2 "3901"
Tempo: {test_time_accumulation} min "3902"
// novo Titulo
Form40:
Title: Ensaios por Ultrassom - Exame do Corpo: (A)
Caldeira possui Registro de Fábrica conforme ASME1? Sim/Não {registration_according_asme1} "Sim" // verificar se vai estar OK após ajuste
Total de medidas tomadas: {total_measures_taken_body_exam} "4001"
Média determinada: {determined_average_body_exam} (mm) "4002"
Espessura fornecida pela fabricante: {thickness_provided_by_the_manufacturer_body_exam} (mm) "4003"
Taxa de corrosão: {corrosion_rate_body_exam} % "4004"
Espessura mínima admitida para a pressão de serviço: {minimum_thickness_allowed_body_exam} (mm) "1.52"
Anexar foto(s) do exame: Image {exam_photos} // Verificar img
Form41:
// Titulo muda de acordo com o Tipo Escolhido {Aquatubular = Title: Exame do Espelho Inferior (B)
}
Title: Ensaios por ultrassom - Exame do Espelho Aqui altera podendo ser (Frontal) ou (Inferior) {examType}:(B)
Total de medidas tomadas: {total_measures_taken_mirror_front_exam} "4101"
Média determinada: {determined_average_mirror_front_exam} (mm) "4102"
Espessura fornecida pela fabricante: {thickness_provided_by_the_manufacturer_mirror_front_exam} (mm) "4103"
Taxa de corrosão: {corrosion_rate_mirror_front_exam} % "4104"
espessura mínima admitida para a pressão de serviço: {minimum_thickness_allowed_mirror_front_exam}(mm) "2.03" -----
Anexar foto(s) do exame: Image {exam_photos_mirror_b} // Verificar img
Form42:
// Titulo muda de acordo com o Tipo Escolhido {Aquatubular = Title: Exame do Espelho Superior (C)
}
Title: Ensaios por ultrassom - Exame do Espelho POde ser (Traseiro) ou (Superior) {examType}: (C)
Total de medidas tomadas: {total_measures_taken_mirror_back_exam} "4201"
Média determinada: {determined_average_mirror_back_exam} (mm) "4202"
Espessura fornecida pela fabricante: {thickness_provided_by_the_manufacturer_mirror_back_exam} (mm) "4203"
Taxa de corrosão: {corrosion_rate_mirror_back_exam} % "4204"
Espessura mínima admitida para a pressão de serviço: {minimum_thickness_allowed_mirror_back_exam} (mm) "2.03" ------
Anexar foto(s) do exame: Image {exam_photos_mirror_c} // Verificar img
// se o tipo for Refratária, não aparece esse form43
Form43:
Title: Ensaios por ultrassom - Exame da Fornalha: (D)
Total de medidas tomadas: {total_measures_taken_furnace_exam}
Média determinada: {determined_average_furnace_exam} (mm)
Espessura fornecida pela fabricante: {thickness_provided_by_the_manufacturer_furnace_exam} (mm)
Taxa de corrosão: {corrosion_rate_furnace_exam} %
Espessura mínima admitida para a pressão de serviço: {minimum_thickness_allowed_furnace_exam} (mm)
Anexar foto(s) do exame: Image {exam_photos_furnace}
// Verificar, pois acho que aqui é o IF de aparecer esses ou não
// novo titulo
Form44:
Title: Atualização da PMTA
Pode ser mantida: Sim/Não "Não" {can_be_keeped}
Deve ser aumentada para: {must_be_increased_to} "4301"
Deve ser diminuida para: {must_be_reduced_to} "4302"
Observações: TextArea{pmta_observation} "obs passo 43"
// novo titulo
Form45:
Title: Conclusões
Itens desta NR que não estão sendo atendidos: TextArea {items_of_nr} "passo 44 A"
Providências imediatas necessárias: TextArea {necessary_immediate_measures} "Passo 44 B"
Form46:
Data de Inspeção: {deadline_for_execution} "22/11/2023"
Recomendações Necessárias: {necessary_recommendations} "Teste passo 45"
Form47:
A caldeira inspecionada pode ser utilizada normalmente? Sim/Não "Não" {boiler_can_be_used}
Observações: TextArea {boiler_can_be_used_observations} "Obs passo 46"
