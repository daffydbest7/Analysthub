const schoolData = {
'001': {name: 'COMMUNITY SECONDARY SCHOOL, BELETIEMA', lga: 'BRASS'}, 
'002': {name: 'COMMUNITY SECONDARY SCHOOL, EGWEAMA', lga: 'BRASS'}, 
'003': {name: 'COMMUNITY SECONDARY SCHOOL, FISHTOWN', lga: 'BRASS'}, 
'004': {name: 'COMMUNITY SECONDARY SCHOOL, LIAMA', lga: 'BRASS'}, 
'005': {name: 'COMMUNITY SECONDARY SCHOOL, MINIBIE-AKASSA', lga: 'BRASS'}, 
'006': {name: 'COMMUNITY SECONDARY SCHOOL, ODIOAMA', lga: 'BRASS'}, 
'007': {name: 'COMMUNITY SECONDARY SCHOOL, OKPOAMA', lga: 'BRASS'}, 
'008': {name: 'COMMUNITY SECONDARY SCHOOL, SANGANA-AKASSA', lga: 'BRASS'}, 
'009': {name: 'COMMUNITY SECONDARY SCHOOL, TWON-BRASS', lga: 'BRASS'}, 
'010': {name: 'GOVERNMENT MODEL SECONDARY SCHOOL, TWON-BRASS', lga: 'BRASS'}, 
'011': {name: 'GOVERNMENT SECONDARY SCHOOL, AKASSA', lga: 'BRASS'}, 
'012': {name: 'GOVERNMENT SECONDARY SCHOOL, OKPOAMA', lga: 'BRASS'}, 
'013': {name: 'AGBIDIAMA GRAMMAR SCHOOL, AGBIDIAMA', lga: 'EKEREMOR'}, 
'014': {name: 'CENTRAL COMMUNITY SECONDARY SCHOOL, OGBOTOBO', lga: 'EKEREMOR'}, 
'015': {name: 'COMMUNITY SECONDARY SCHOOL,TUNU-AMA', lga: 'EKEREMOR'}, 
'016': {name: 'COMMUNITY SECONDARY SCHOOL, AGHORO', lga: 'EKEREMOR'}, 
'017': {name: 'COMMUNITY SECONDARY SCHOOL, ALEIBIRI', lga: 'EKEREMOR'}, 
'018': {name: 'COMMUNITY SECONDARY SCHOOL, ANGALAOWEIGBENE', lga: 'EKEREMOR'}, 
'019': {name: 'COMMUNITY SECONDARY SCHOOL, EKEREMOR', lga: 'EKEREMOR'}, 
'020': {name: 'COMMUNITY SECONDARY SCHOOL, FOUTORUGBENE', lga: 'EKEREMOR'}, 
'021': {name: 'COMMUNITY SECONDARY SCHOOL, ISAMPOU', lga: 'EKEREMOR'}, 
'022': {name: 'COMMUNITY SECONDARY SCHOOL, LALAGBENE', lga: 'EKEREMOR'}, 
'023': {name: 'COMMUNITY SECONDARY SCHOOL, NORGBENE', lga: 'EKEREMOR'}, 
'024': {name: 'COMMUNITY SECONDARY SCHOOL, OBRIGBENE', lga: 'EKEREMOR'}, 
'025': {name: 'COMMUNITY SECONDARY SCHOOL, OGBOSUWARE', lga: 'EKEREMOR'}, 
'026': {name: 'COMMUNITY SECONDARY SCHOOL PERETORUGBENE', lga: 'EKEREMOR'}, 
'027': {name: 'COMMUNITY SECONDARY SCHOOL, TORUGBENE II', lga: 'EKEREMOR'}, 
'028': {name: 'COMMUNITY SECONDARY SCHOOL, TORU-NDORO', lga: 'EKEREMOR'}, 
'029': {name: 'DODO COMPREHENSIVE SECONDARY SCHOOL, AMATU II', lga: 'EKEREMOR'}, 
'030': {name: 'EGBEMO COMPREHENSIVE SECONDARY SCHOOL, AZAGBENE', lga: 'EKEREMOR'}, 
'031': {name: 'EKERE SECONDARY SCHOOL, AMABULOU', lga: 'EKEREMOR'}, 
'032': {name: 'GOVT COMPREHENSIVE SECONDARY SCHOOL, TAMOGBENE', lga: 'EKEREMOR'}, 
'033': {name: 'GOVERNMENT MODEL SECONDARY SCHOOL, EKEREMOR', lga: 'EKEREMOR'}, 
'034': {name: 'IDO COMPREHENSIVE SEC SCHOOL, EGBEMO-ANGALABIRI', lga: 'EKEREMOR'}, 
'035': {name: 'IDUWINI COMMUNITY SECONDARY SCHOOL, LETUGBENE', lga: 'EKEREMOR'}, 
'036': {name: 'COMMUNITY SECONDARY SCHOOL, IZON ODODO BILABIRI', lga: 'EKEREMOR'}, 
'037': {name: 'COMMUNITY SECONDARY SCHOOL, AGGE', lga: 'EKEREMOR'}, 
'038': {name: 'COMMUNITY SECONDARY SCHOOL AYAMASA', lga: 'EKEREMOR'}, 
'039': {name: 'AMATUGU COMPREHENSIVE SECONDARY SCHOOL', lga: 'KOLOKUMA/OPOKUMA'}, 
'040': {name: 'GOVERNMENT GIRLS SECONDARY SCHOOL, KAIAMA', lga: 'KOLOKUMA/OPOKUMA'}, 
'041': {name: 'KAIAMA GRAMMAR SCHOOL, KAIMA', lga: 'KOLOKUMA/OPOKUMA'}, 
'042': {name: 'GOVERNMENT SECONDARY SCHOOL, ODI', lga: 'KOLOKUMA/OPOKUMA'}, 
'043': {name: 'COMMUNITY SECONDARY SCHOOL, OKOLOBA', lga: 'KOLOKUMA/OPOKUMA'}, 
'044': {name: 'OPOKUMA SOUTH SECONDARY SCHOOL, OPOKUMA', lga: 'KOLOKUMA/OPOKUMA'}, 
'045': {name: 'COMMUNITY SECONDARY SCHOOL, SABAGREIA', lga: 'KOLOKUMA/OPOKUMA'}, 
'046': {name: 'BAYELSA STATE SPORTS ACADEMY, ASOAMA', lga: 'KOLOKUMA/OPOKUMA'}, 
'047': {name: 'CAPTAIN SAMUEL TIMINIPRE OWONARO IJAW NATIONAL ACADEMY, KAIAMA', lga: 'KOLOKUMA/OPOKUMA'}, 
'048': {name: 'COMMUNITY GIRLS SECONDARY SCHOOL ODI', lga: 'KOLOKUMA/OPOKUMA'}, 
'049': {name: 'OPOKUMA GRAMMAR SCHOOL, OPOKUMA', lga: 'KOLOKUMA/OPOKUMA'}, 
'050': {name: 'SAMPOU GRAMMAR SCHOOL, SAMPOU', lga: 'KOLOKUMA/OPOKUMA'}, 
'051': {name: 'COMMUNITY SECONDARY SCHOOL,OTUMOAMA', lga: 'NEMBE'}, 
'052': {name: 'COMMUNITY BOYS SECONDARY SCHOOL, BASSAMBIRI', lga: 'NEMBE'}, 
'053': {name: 'NEMBE NATIONAL GRAMMAR SCHOOL, NEMBE', lga: 'NEMBE'}, 
'054': {name: 'COMMUNITY COMPREHENSIVE HIGH SCHOOL, NEMBE CREEK', lga: 'NEMBE'}, 
'055': {name: 'COMMUNITY COMPREHENSIVE SCHOOL, OLOGOAMA', lga: 'NEMBE'}, 
'056': {name: 'MINI COMMUNITY SECODARY SCHOOL, AGRISABA', lga: 'NEMBE'}, 
'057': {name: 'COMMUNITY SECONDARY SCHOOL, EKPERIAMA', lga: 'NEMBE'}, 
'058': {name: 'COMMUNITY GIRLS SECODARY SCHOOL, OGBOLOMABIRI', lga: 'NEMBE'}, 
'059': {name: 'GOVERNMENT SCIENCE AND TECHNICAL COLLEGE, IGBETA EWOAMA', lga: 'NEMBE'}, 
'060': {name: 'COMMUNITY SECODARY SCHOOL, OKOROBA', lga: 'NEMBE'}, 
'061': {name: 'COMMUNITY SECODARY SCHOOL, OKOROMA', lga: 'NEMBE'}, 
'062': {name: 'COMMUNITY SECODARY SCHOOL, FANTUO', lga: 'NEMBE'}, 
'063': {name: 'COMMUNITY SECODARY SCHOOL, EWELESUO', lga: 'NEMBE'}, 
'064': {name: 'GOVERNMENT GIRLS SECONDARY SCHOOL, NEMBE', lga: 'NEMBE'}, 
'065': {name: 'COMMUNITY COMPREHENSIVE SECONDARY SCHOOL OBIOKU', lga: 'NEMBE'}, 
'066': {name: 'GOVERNMENT COMPREHENSIVE SECONDARY SCHOOL, NEMBE', lga: 'NEMBE'}, 
'067': {name: 'COMMUNITY SECONDARY SCHOOL, AKIPELAI', lga: 'OGBIA'}, 
'068': {name: 'COMMUNITY SECONDARY SCHOOL AMOROKENI', lga: 'OGBIA'}, 
'069': {name: 'GOVERNMENT SECODARY SCHOOL. ANYAMA-OGBIA', lga: 'OGBIA'}, 
'070': {name: 'COMMUNITY SECONDARY SCHOOL, AYAKORO', lga: 'OGBIA'}, 
'071': {name: 'COMMUNITY COMPREHENSIVE SEC SCHOOL, ELEBELE', lga: 'OGBIA'}, 
'072': {name: 'ODINADE COMMUNITY SEC SCHOOL, EMAKALAKALA', lga: 'OGBIA'}, 
'073': {name: 'COMMUNITY BOYS SECONDARY SCHOOL, EMEYAL', lga: 'OGBIA'}, 
'074': {name: 'GOVERNMENT COMPREHENSIVE SECONDARY SCHOOL, EPEBU', lga: 'OGBIA'}, 
'075': {name: 'COMMUNITY SECONDARY SCHOOL IDEMA', lga: 'OGBIA'}, 
'076': {name: 'COMMUNITY SECONDARY SCHOOL, KOLO', lga: 'OGBIA'}, 
'077': {name: 'COMMUNITY SECONDARY SCHOOL, OKIKI', lga: 'OGBIA'}, 
'078': {name: 'COMMUNITY SECONDARY SCHOOL, OKODI-OGBIA', lga: 'OGBIA'}, 
'079': {name: 'COMMUNITY SECONDARY SCHOOL, OLOGI', lga: 'OGBIA'}, 
'080': {name: 'COMMUNITY COMPREHENSIVE SECONDARY SCHOOL OLOGOGHE', lga: 'OGBIA'}, 
'081': {name: 'OLOIBIRI GRAMM. SCHOOL, OLOIBIRI', lga: 'OGBIA'}, 
'082': {name: 'COMMUNITY SECONDARY SCHOOL, ONUEBUM', lga: 'OGBIA'}, 
'083': {name: 'COMMUNITY COMPREHENSIVE SECONDARY SCHOOLS - OPUME', lga: 'OGBIA'}, 
'084': {name: 'COMMUNITY SECONDARY SCHOOL, ORUMA', lga: 'OGBIA'}, 
'085': {name: 'OWEMA COMMUNITY COMMPRESIVE SECONDARY SCHOOL, OTAKEME', lga: 'OGBIA'}, 
'086': {name: 'COMMUNITY SECONDARY SCHOOL, OTUASEGA', lga: 'OGBIA'}, 
'087': {name: 'COMMUNITY SECONDARY SCHOOL, OTUEDU', lga: 'OGBIA'}, 
'088': {name: 'COMMUNITY SECONDARY SCHOOL, OTUOGIDI', lga: 'OGBIA'}, 
'089': {name: 'COMMUNITY SECONDARY SCHOOL, OTUOKE/OTUABA', lga: 'OGBIA'}, 
'090': {name: 'COMMUNITY SECONDARY SCHOOL, OTUOKPOTI', lga: 'OGBIA'}, 
'091': {name: 'COMMUNITY GIRLS SECONDARY SCHOOL, EMEYAL 11', lga: 'OGBIA'}, 
'092': {name: 'COMMUNITY COMP.SECONDARY SCHOOL EWOI', lga: 'OGBIA'}, 
'093': {name: 'MATER DEI HIGH SCHOOL, IMIRINGI', lga: 'OGBIA'}, 
'094': {name: 'GOVERNMENT SECONDARY SCHOOL OGBIA TOWN', lga: 'OGBIA'}, 
'095': {name: 'COMMUNITY SECONDARY SCHOOL OTUABAGI', lga: 'OGBIA'}, 
'096': {name: 'COMMUNITY SECONDARY SCHOOL OTUABULA 2', lga: 'OGBIA'}, 
'097': {name: 'COMMUNITY SECONDARY SCHOOL OTUEGWE I', lga: 'OGBIA'}, 
'098': {name: 'COMMUNITY SECONDARY SCHOOL OTUOBHI', lga: 'OGBIA'}, 
'099': {name: 'COMMUNITY SECONDARY SCHOOL OTUOGORI', lga: 'OGBIA'}, 
'100': {name: 'GOVERNMENT SCIENCE AND TECHNICAL COLLEGE, OPUME', lga: 'OGBIA'}, 
'101': {name: 'COMMUNITY SECONDARY SCHOOL, AGORO-GBENE', lga: 'SAGBAMA'}, 
'102': {name: 'COMMUNITY SECONDARY SCHOOL, ABUETOR', lga: 'SAGBAMA'}, 
'103': {name: 'COMMUNITY SECONDARY SCHOOL, ADAGBABIRI', lga: 'SAGBAMA'}, 
'104': {name: 'RIVER NUN GRAMMAR SCHOOL, AGBERE/ODONI', lga: 'SAGBAMA'}, 
'105': {name: 'COMMUNITY SECONDARY SCHOOL, AGORO', lga: 'SAGBAMA'}, 
'106': {name: 'COMMUNITY SECONDARY SCHOOL, AKEDDEI', lga: 'SAGBAMA'}, 
'107': {name: 'COMMUNITY SECONDARY SCHOOL, ANGALABIRI', lga: 'SAGBAMA'}, 
'108': {name: 'GOVERNMENT SECONDARY SCHOOL, ASAMABIRI', lga: 'SAGBAMA'}, 
'109': {name: 'COMMUNITY SECONDARY SCHOOL, BULOU-ORUA', lga: 'SAGBAMA'}, 
'110': {name: 'COMMUNITY COMPREHENSIVE SEC SCH, EGBOPULOAMA', lga: 'SAGBAMA'}, 
'111': {name: 'COMMUNITY SECONDARY SCHOOL, ELEMEBIRI', lga: 'SAGBAMA'}, 
'112': {name: 'COMMUNITY SECONDARY SCHOOL, ISONI', lga: 'SAGBAMA'}, 
'113': {name: 'COMMUNITY SECONDARY SCHOOL, KABEAMA', lga: 'SAGBAMA'}, 
'114': {name: 'COMMUNITY SECONDARY SCHOOL, OFONI', lga: 'SAGBAMA'}, 
'115': {name: 'COMMUNITY SECONDARY SCHOOL, OGOBIRI', lga: 'SAGBAMA'}, 
'116': {name: 'COMMUNITY SECONDARY SCHOOL, OKUMBIRI', lga: 'SAGBAMA'}, 
'117': {name: 'COMMUNITY SECONDARY SCHOOL OSEKWENIKE', lga: 'SAGBAMA'}, 
'118': {name: 'COMMUNITY SECONDARY SCHOOL, OSSIAMA', lga: 'SAGBAMA'}, 
'119': {name: 'GOVERNMENT MODEL SECONDARY SCHOOL, SAGBAMA', lga: 'SAGBAMA'}, 
'120': {name: 'GOVERNMENT SECONDARY SCHOOL, TORU-EBENI', lga: 'SAGBAMA'}, 
'121': {name: 'COMMUNITY SECONDARY SCHOOL, TROFANI', lga: 'SAGBAMA'}, 
'122': {name: 'GOVERNMENT COMPREHSIVE SECONDARY SCHOOL, TUNGBO', lga: 'SAGBAMA'}, 
'123': {name: 'COMMUNITY SECONDARY SCHOOL EBEDEBIRI', lga: 'SAGBAMA'}, 
'124': {name: 'COMMUNITY SECONDARY SCHOOL, TORU-ANGIAMA', lga: 'SAGBAMA'}, 
'125': {name: 'KOLOBIRI-OWEI HIGH SCHOOL, TORU-ORUA', lga: 'SAGBAMA'}, 
'126': {name: 'COMMUNITY SECONDARY SCHOOL, ADUKU', lga: 'SAGBAMA'}, 
'127': {name: 'COMMUNITY SECONDARY SCHOOL, OGBONUAMA/SAGBAMA', lga: 'SAGBAMA'}, 
'128': {name: 'GOVERNMENT SCIENCE AND TECHNICAL COLLEGE, OFONI', lga: 'SAGBAMA'}, 
'129': {name: 'OLODIAMA COMPREHENSIVE HIGH SCHOOL, IKEBIRI', lga: 'SOUTHERN IJAW'}, 
'130': {name: 'COMMUINITY SECONDARY SCHOOL IKEINGHENBIRI', lga: 'SOUTHERN IJAW'}, 
'131': {name: 'COMMUNITY SECONDARY SCHOOL, KOLUAMA 1', lga: 'SOUTHERN IJAW'}, 
'132': {name: 'COMMUNUTY SECONDARY SCHOOL, KOLUAMA 2', lga: 'SOUTHERN IJAW'}, 
'133': {name: 'COMMUNITY SECONDARY SCHOOL, KOROKOROSEI', lga: 'SOUTHERN IJAW'}, 
'134': {name: 'COMMUNITY SECONDARY SCHOOL, OLUGBOBORO', lga: 'SOUTHERN IJAW'}, 
'135': {name: 'COMMUNITY SECONDARY SCHOOL ONDEWARI', lga: 'SOUTHERN IJAW'}, 
'136': {name: 'COMMUNITY SECONDARY SCHOOL AZAMA', lga: 'SOUTHERN IJAW'}, 
'137': {name: 'COMPREHENSIVE HIGH SCHOOL AZUZUAMA', lga: 'SOUTHERN IJAW'}, 
'138': {name: 'COMMUNITY SECONDARY SCHOOL, EKENI', lga: 'SOUTHERN IJAW'}, 
'139': {name: 'COMMUNITY COMPREHENSIVE SECONDARY SCHOOL, EZETU', lga: 'SOUTHERN IJAW'}, 
'140': {name: 'COMMUNITY SECONDARY SCHOOL FOROPA', lga: 'SOUTHERN IJAW'}, 
'141': {name: 'COMMUNITY SECONDARY SCHOOL, GBANRAUN', lga: 'SOUTHERN IJAW'}, 
'142': {name: 'COMMUNITY SECONDARY SCHOOL, KEME EBIAMA', lga: 'SOUTHERN IJAW'}, 
'143': {name: 'OKUMO SECONDARY SCHOOL, LOBIA 2', lga: 'SOUTHERN IJAW'}, 
'144': {name: 'COMMUNITY SECONDARY SCHOOL, OGBOINBIRI', lga: 'SOUTHERN IJAW'}, 
'145': {name: 'COMMUNITY SECONDARY SCHOOL OLUGBOBIRI', lga: 'SOUTHERN IJAW'}, 
'146': {name: 'GOVERNMENT SECONDARY SCHOOL, TEBIDABA', lga: 'SOUTHERN IJAW'}, 
'147': {name: 'COMMUNITY SECONDARY SCHOOL, UKPARATUBU', lga: 'SOUTHERN IJAW'}, 
'148': {name: 'AKPALAKPA GRAMMAR SCHOOL, UKUBIE', lga: 'SOUTHERN IJAW'}, 
'149': {name: 'COMMUNITY SECONDARY SCHOOL, AGUOBIRI', lga: 'SOUTHERN IJAW'}, 
'150': {name: 'GOVERNMENT SECONDARY SCHOOL, AMASSOMA', lga: 'SOUTHERN IJAW'}, 
'151': {name: 'OGBOIN GRAMMAR SCHOOL, AMATOLO', lga: 'SOUTHERN IJAW'}, 
'152': {name: 'COMMUNITY COMPREHENSIVE SEC SCHOOL, ANGIAMA', lga: 'SOUTHERN IJAW'}, 
'153': {name: 'TARAKIRI COMMUNITY SECONDARY SCHOOL, ANYAMA-IJAW', lga: 'SOUTHERN IJAW'}, 
'154': {name: 'COMMUNITY SECONDARY SCHOOL, DIEBU', lga: 'SOUTHERN IJAW'}, 
'155': {name: 'COMMUNITY SECONDARY SCHOOL, EKOWE', lga: 'SOUTHERN IJAW'}, 
'156': {name: 'COMMUNITY SECONDARY SCHOOL, FIEREBAGHA-AMA', lga: 'SOUTHERN IJAW'}, 
'157': {name: 'OGOU COMPREHENSIVE SEC, SCHOOL, IGEIBIRI', lga: 'SOUTHERN IJAW'}, 
'158': {name: 'COMM UNITY COMPRE SEC SCH, KEMEINAMA AKPOMUGBENE', lga: 'SOUTHERN IJAW'}, 
'159': {name: 'COMMUNITY SECONDARY SCHOOL, OKIAMA', lga: 'SOUTHERN IJAW'}, 
'160': {name: 'COMMUNITY SECONDARY SCHOOL, ONYOMA', lga: 'SOUTHERN IJAW'}, 
'161': {name: 'GOVERNMENT SECONDARY SCHOOL, OPUAMA', lga: 'SOUTHERN IJAW'}, 
'162': {name: 'COMMUNITY SECONDARY SCHOOL, OTUAN', lga: 'SOUTHERN IJAW'}, 
'163': {name: 'OBOLO GRAMMAR SCHOOL, OWEIKOROGHA', lga: 'SOUTHERN IJAW'}, 
'164': {name: 'COMMUNITY SECONDARY SCHOOL OZEZEBIRI', lga: 'SOUTHERN IJAW'}, 
'165': {name: 'COMMUNITY SECONDARY SCHOOL, PEREMABIRI', lga: 'SOUTHERN IJAW'}, 
'166': {name: 'COMMUNITY SECONDARY SCHOOL, POLO-BUBOU', lga: 'SOUTHERN IJAW'}, 
'167': {name: 'COMMUNITY SECONDARY SCHOOL, AMASSOMA', lga: 'SOUTHERN IJAW'}, 
'168': {name: 'COMMUNITY SECONDARY SCHOOL BOLOU AGUOBIRI', lga: 'SOUTHERN IJAW'}, 
'169': {name: 'COMMUNITY SECONDARY SCHOOL ENIWARI', lga: 'SOUTHERN IJAW'}, 
'170': {name: 'COMMUNITY SECONDARY SCHOOL, IGBOMOTORU', lga: 'SOUTHERN IJAW'}, 
'171': {name: 'COMMUNITY SECONDARY. SCHOOL, OBOLOLI', lga: 'SOUTHERN IJAW'}, 
'172': {name: 'SOUTHERN IJAW SECONDARY SCHOOL OPOROMA', lga: 'SOUTHERN IJAW'}, 
'173': {name: 'COMMUNITY SECONDARY SCHOOL, IPIRIGBENE', lga: 'SOUTHERN IJAW'}, 
'174': {name: 'IKISA COMPREHENSIVE HIGH SCHOOL, FONIBIRI', lga: 'SOUTHERN IJAW'}, 
'175': {name: 'COMMUNITY SECONDARY SCHOOL, KAINYANBIRI', lga: 'SOUTHERN IJAW'}, 
'176': {name: 'COMMUNITY SECONDARY SCHOOL, AGBOBIRI OKORDIA', lga: 'YENAGOA'}, 
'177': {name: 'COMMUNITY COMPREHENSIVE SCHOOL, AGBURA', lga: 'YENAGOA'}, 
'178': {name: 'AGUDAMA COMPREHENSIVE HIGH SCHOOL AGUDAMA-EKPETIAMA', lga: 'YENAGOA'}, 
'179': {name: 'COMMUNITY GIRLS SECONDARY SCHOOL, AGUDAMA-EPIE', lga: 'YENAGOA'}, 
'180': {name: 'COMMUNITY SECONDARY SCHOOL, AKENFA-EPIE', lga: 'YENAGOA'}, 
'181': {name: 'BISENI SECONDARY SCHOOL, BISENI', lga: 'YENAGOA'}, 
'182': {name: 'COMMUNITY COMPREHENSIVE SCH, BIOGBOLO/ YENIZUE-GENE', lga: 'YENAGOA'}, 
'183': {name: 'COMMUNITY SECONDARY SCHOOL, BUMOUNDI-EKPETIAMA', lga: 'YENAGOA'}, 
'184': {name: 'COMMUNITY SECONDARY SCHOOL, EGBEIBIRI', lga: 'YENAGOA'}, 
'185': {name: 'COMMUNITY SECONDARY SCHOOL, FAMGBE', lga: 'YENAGOA'}, 
'186': {name: 'COMMUNITY SECONDARY SCHOOL, IGBOGENE-EPIE', lga: 'YENAGOA'}, 
'187': {name: 'COMMUNITY SECONDARY SCHOOL IKARAMA', lga: 'YENAGOA'}, 
'188': {name: 'OGBOPURU COMMUNITY SCHOOL, KOROAMA', lga: 'YENAGOA'}, 
'189': {name: 'EPIE NATIONAL HIGH SCHOOL, KPANSIA', lga: 'YENAGOA'}, 
'190': {name: 'OGBOIN COMPREHENSIVE HIGH SCHOOL, NEDUGO-AGBIA', lga: 'YENAGOA'}, 
'191': {name: 'OGU GRAMMAR SCHOOL, OGU', lga: 'YENAGOA'}, 
'192': {name: 'GOVERRNMENT SCIENCE AND TECHNICAL COLLEGE, OKAKA', lga: 'YENAGOA'}, 
'193': {name: 'GBARAINOWEI GRAMMAR SCHOOL, OKOLOBIRI', lga: 'YENAGOA'}, 
'194': {name: 'COMMUNITY SECONDARY SCHOOL, OKUKTUKUTU/ETEGWE', lga: 'YENAGOA'}, 
'195': {name: 'BAYELSA STATE SCHOOL FOR CHILDREN WITH SPECIAL NEEDS', lga: 'YENAGOA'}, 
'196': {name: 'CENTRAL EPIE SCHOOL, OPOLO', lga: 'YENAGOA'}, 
'197': {name: 'COMMUNITY SECONDARY SCHOOL, POLAKU', lga: 'YENAGOA'}, 
'198': {name: 'COMMUNITY SECONDARY SCHOOL, SWALI', lga: 'YENAGOA'}, 
'199': {name: 'EKPETIAMA COMPREHENSIVE SCHOOL, TOMBIA', lga: 'YENAGOA'}, 
'200': {name: 'COMMUNITY SECONDARY SCHOOL, YENAKA', lga: 'YENAGOA'}, 
'201': {name: 'COMMUNITY SECONDARY SCHOOL, YENEGWE', lga: 'YENAGOA'}, 
'202': {name: 'COMMUNITY BOYS SECONDARY SCHOOL, AGUDAMA-EPIE', lga: 'YENAGOA'}, 
'203': {name: 'COMMUNITY SECONDARY SCHOOL, AZIKORO.', lga: 'YENAGOA'}, 
'204': {name: 'ST JUDES GIRLS SECONDARY SCHOOL, AMARATA', lga: 'YENAGOA'}, 
'205': {name: 'OGBO MEMORIAL GRAMMAR SCHOOL IKIBIRI', lga: 'YENAGOA'}, 
'206': {name: 'COMMUNITY SECONDARY SCHOOL,IKOLO', lga: 'YENAGOA'}, 
'207': {name: 'COMMUNITY SECONDARY SCHOOL, KPANSIA', lga: 'YENAGOA'}, 
'208': {name: 'COMMUNITY COMPREHENSIVE SECONDARY SCHOOL, OKORDIA/NORTH', lga: 'YENAGOA'}, 
'209': {name: 'BISHOP DIMEARI GRAMMAR SCHOOL YENAGOA', lga: 'YENAGOA'}, 
'210': {name: 'COMMUNITY SECONDARY SCHOOL, ZARAMA', lga: 'YENAGOA'}, 
'211': {name: 'GOVERNMENT SCIENCE & TECHNICAL COLLEGE, SWALI', lga: 'YENAGOA'}, 
'212': {name: 'GOVERNMENT SECONDARY SCHOOL, OBOGORO', lga: 'YENAGOA'}, 
'213': {name: 'GOVERNMENT SECONDARY SCHOOL, OVOM', lga: 'YENAGOA'}, 
'214': {name: 'GOVERNMENT SECONDARY SCHOOL, YENIZUE-EPIE', lga: 'YENAGOA'}, 
'215': {name: 'GOVERNMENT SECONDARY SCHOOL, BIOGBOLO', lga: 'YENAGOA'}, 
'216': {name: 'GOVERNMENT SECONDARY SCHOOL,IGBOGENE-EPIE', lga: 'YENAGOA'}
  };
  
  export default schoolData;