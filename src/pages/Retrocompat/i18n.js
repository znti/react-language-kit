export default {
    'en-US': {
        title: 'Retrocompatibility test',
        version: 'Version',
        description: 'Active language',
        options: 'Languages available',
        button: 'Revert languages list!',

        versionWithHooks: 'Version {v} (using Hooks)',
        versionWithClass: 'Version {v} (using Class)',

        formatArgs: 'Formatted Arguments',
        'formatArgs.percentUsage': 'Percent Usage',
        'formatArgs.dateUsage': 'Date Usage',
        'formatArgs.timeUsage': 'Time Usage',
        'formatArgs.currencyUsage': 'Currency Usage',
        'formatArgs.selectUsage': 'Select Usage',
        'formatArgs.pluralUsage': 'Plural Usage',

        formattedArgument: {
            percentUsage: 'I have {numCats, number} cats. Almost {pctBlack, number, percent} of them are black.',
            dateUsage: 'Sale begins {start, date, long}',
            timeUsage: 'Coupon expires at {expires, time, short}',
            currencyUsage: 'Your total is {total, number, usd}',
            selectUsage: '{gender, select, male {He} female {She} other {They} } will respond shortly.',
            pluralUsage: 'You have {itemCount, plural, =0 {no items} one {# item} other {# items} }.',
        },

        fallbackTest: 'Fallback Test',
        fallbackValue: 'term defined only in the json file for the en-US locale',
    },
    'pt-BR': {
        title: 'Teste de retrocompatibilidade',
        version: 'Versão',
        description: 'Idioma ativo',
        options: 'Idiomas disponíveis',
        button: 'Inverter lista de idiomas!',

        versionWithHooks: 'Versão {v} (usando Hooks)',
        versionWithClass: 'Versão {v} (usando Class)',

        formatArgs: 'Argumentos formatados',
        'formatArgs.percentUsage': 'Uso de porcentagem',
        'formatArgs.dateUsage': 'Uso de data',
        'formatArgs.timeUsage': 'Uso de tempo',
        'formatArgs.currencyUsage': 'Uso de moeda',
        'formatArgs.selectUsage': 'Uso de seleção',
        'formatArgs.pluralUsage': 'Uso de plural',

        formattedArgument: {
            percentUsage: 'Eu Tenho {numCats, number} gatos. Cerca de {pctBlack, number, percent} deles são pretos.',
            dateUsage: 'As vendas começam em {start, date, long}',
            timeUsage: 'O cupom expira às {expires, time, short}',
            currencyUsage: 'Seu total é {total, number, brl}',
            selectUsage: '{gender, select, male {Ele} female {Ela} other {Ele(a)} } responderá em breve.',
            pluralUsage: 'Você {itemCount, plural, =0 {não tem itens} one {tem # item} other {tem # itens} }.',
        },

        fallbackTest: 'Teste de recuperação de falha (termo é buscado no locale padrão)',
    },
};
