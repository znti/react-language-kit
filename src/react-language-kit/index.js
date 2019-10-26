import React, { createContext, useContext, useState, useReducer } from 'react';
import IntlMessageFormat from 'intl-messageformat';

const defaultLanguage = 'en-US';

const LanguageContext = createContext();

const ActiveLanguageContext = createContext();
const AvailableLanguagesContext = createContext();

const reducer = (state, language) => {
	if(state.options.includes(language)) {
		return { ...state, language };
	}
};

function showUsage() {
	console.warn('Skipping availableLanguages and activeLanguage props for misformat.\n',
		'\tProps availableLanguage expects an array of strings.\n',
		'\tProps activeLanguage expects a string contained in availableLanguage array.');
}

export default function LanguageProvider({children, languages, language, activeLanguage, availableLanguages}) {

	const options = languages || [ defaultLanguage ];
	language = language || defaultLanguage;

	let initialLanguages = [ defaultLanguage ];
	let initialLanguage = defaultLanguage;

	if(availableLanguages && Array.isArray(availableLanguages) && availableLanguages.length > 0) {
		initialLanguages = availableLanguages;
	} else {
		showUsage();
	}

	if(activeLanguage && availableLanguages.includes(activeLanguage)) {
		initialLanguage = activeLanguage;
	} else {
		initialLanguage = initialLanguages[0];
	}

	return (
		<AvailableLanguagesContext.Provider value={useState(initialLanguages)}>
			<ActiveLanguageContext.Provider value={useState(initialLanguage)}>
				<LanguageContext.Provider value={useReducer(reducer, {language, options})}>
					{children}
				</LanguageContext.Provider>
			</ActiveLanguageContext.Provider>
		</AvailableLanguagesContext.Provider>
	);
}

export const useLanguage = () => useContext(LanguageContext);
export const useActiveLanguage = () => useContext(ActiveLanguageContext);
export const useAvailableLanguages = () => useContext(AvailableLanguagesContext);

export const useTranslation = (dictionaries = {}, formats) => {
    const [language] = useActiveLanguage();

    /**
     * ==Inner Function==
     * get the raw meaning of a dictionary term
     * @param {Object} dictionary The JSON object used as term dictionary
     * @param {string} term The string representing a dictionary term
     * @returns {string} The meaning of the term in the dictionary
     */
    function translate(dictionary = {}, term) {
        if (dictionary[term]) {
            return dictionary[term];
        }
        return term.split('.').reduce((a, b) => ((a !== undefined) ? a[b] : a), dictionary);
    }

    /**
     * get the meaning of a dictionary term
     * @param {string} term The string representing a dictionary term
     * @param {Object} parameters Replacement parameters
     * @returns {string} The meaning rendered to the term in the dictionary
     */
    return (term = '', parameters) => {
        /* translate the term into the current language */
        let msg = translate(dictionaries[language], term);
        if (msg == null) {
            /* If the term does not exist in the current language,
             * it translates into the default language */
            msg = translate(dictionaries[defaultLanguage], term);
            if (msg == null) {
                /* Fallback if term is not found */
                return term;
            }
        }
        if (!parameters) {
            /* shortcut to avoid unnecessary processing */
            return msg;
        }
        try {
            const msgFormatter = new IntlMessageFormat(msg, language, formats);
            return msgFormatter.format(parameters);
        } catch (err) {
            return msg;
        }
    };
};
