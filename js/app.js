var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);


routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        
        // home page
        .state('/', {
            url: '/',
            views: {
                'banner': { templateUrl: 'partial-home.html' },
                'home-template': { templateUrl: 'home-template.html' },
            }
        })

        // help translate
        .state('ajude_a_traduzir', {
            url: '/ajude_a_traduzir',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@ajude_a_traduzir': { templateUrl: 'help-translate.html' },
            }
        })

        // suggest correction
        .state('sugerir_correcao', {
            url: '/sugerir_correcao',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@sugerir_correcao': { templateUrl: 'suggest-correction.html' },
            }
        })

        // credits
        .state('creditos', {
            url: '/creditos',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@creditos': { templateUrl: 'credits.html' },
            }
        })

        // - Chapters - 
        .state('prefacio', {
            url: '/prefacio',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@prefacio': { templateUrl: 'chapters/00-prefacio.html' },
            }
        })

        .state('visao_geral', {
            url: '/visao_geral',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@visao_geral': { templateUrl: 'chapters/01-visao_geral.html' },
            }
        })

        .state('a_visao_cientifica_do_mundo', {
            url: '/a_visao_cientifica_do_mundo',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@a_visao_cientifica_do_mundo': { templateUrl: 'chapters/02-a_visao_cientifica_do_mundo.html' },
            }
        })

        .state('buscando_solucoes', {
            url: '/buscando_solucoes',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@buscando_solucoes': { templateUrl: 'chapters/03-buscando_solucoes.html' },
            }
        })

        .state('logica_vs_psicologia', {
            url: '/logica_vs_psicologia',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@logica_vs_psicologia': { templateUrl: 'chapters/04-logica_vs_psicologia.html' },
            }
        })

        .state('a_questao_da_unidade_humana', {
            url: '/a_questao_da_unidade_humana',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@a_questao_da_unidade_humana': { templateUrl: 'chapters/05-a_questao_da_unidade_humana.html' },
            }
        })

        .state('o_argumento_final_a_natureza_humana', {
            url: '/o_argumento_final_a_natureza_humana',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@o_argumento_final_a_natureza_humana': { templateUrl: 'chapters/06-o_argumento_final_a_natureza_humana.html' },
            }
        })

        .state('definindo_saude_publica', {
            url: '/definindo_saude_publica',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@definindo_saude_publica': { templateUrl: 'chapters/07-definindo_saude_publica.html' },
            }
        })

        .state('historia_da_economia', {
            url: '/historia_da_economia',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@historia_da_economia': { templateUrl: 'chapters/08-historia_da_economia.html' },
            }
        })

        .state('eficiencia_de_mercado_vs_eficiencia_tecnica', {
            url: '/eficiencia_de_mercado_vs_eficiencia_tecnica',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@eficiencia_de_mercado_vs_eficiencia_tecnica': { templateUrl: 'chapters/09-eficiencia_de_mercado_vs_eficiencia_tecnica.html' },
            }
        })

        .state('disturbio_do_sistema_de_valores', {
            url: '/disturbio_do_sistema_de_valores',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@disturbio_do_sistema_de_valores': { templateUrl: 'chapters/10-disturbio_do_sistema_de_valores.html' },
            }
        })

        .state('classismo_estrutural_o_estado_e_a_guerra', {
            url: '/classismo_estrutural_o_estado_e_a_guerra',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@classismo_estrutural_o_estado_e_a_guerra': { templateUrl: 'chapters/11-classismo_estrutural_o_estado_e_a_guerra.html' },
            }
        })

        .state('introducao_ao_pensamento_sustentavel', {
            url: '/introducao_ao_pensamento_sustentavel',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@introducao_ao_pensamento_sustentavel': { templateUrl: 'chapters/12-introducao_ao_pensamento_sustentavel.html' },
            }
        })

        .state('tendencias_pos_escassez_capacidade_e_eficiencia', {
            url: '/tendencias_pos_escassez_capacidade_e_eficiencia',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@tendencias_pos_escassez_capacidade_e_eficiencia': { templateUrl: 'chapters/13-tendencias_pos_escassez_capacidade_e_eficiencia.html' },
            }
        })

        .state('fatores_economicos_reais', {
            url: '/fatores_economicos_reais',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@fatores_economicos_reais': { templateUrl: 'chapters/14-fatores_economicos_reais.html' },
            }
        })

        .state('o_governo_industrial', {
            url: '/o_governo_industrial',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@o_governo_industrial': { templateUrl: 'chapters/15-o_governo_industrial.html' },
            }
        })

        .state('estilo_de_vida', {
            url: '/estilo_de_vida',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@estilo_de_vida': { templateUrl: 'chapters/16-estilo_de_vida.html' },
            }
        })

        .state('desistabilizacao_social_e_transicao', {
            url: '/desistabilizacao_social_e_transicao',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@desistabilizacao_social_e_transicao': { templateUrl: 'chapters/17-desistabilizacao_social_e_transicao.html' },
            }
        })

        .state('tornando_se_o_movimento_zeitgeist', {
            url: '/tornando_se_o_movimento_zeitgeist',
            views: {
                'chapters-template': { templateUrl: 'chapters-template.html' },
                'content@tornando_se_o_movimento_zeitgeist': { templateUrl: 'chapters/18-tornando_se_o_movimento_zeitgeist.html' },
            }
        })        
          
});
