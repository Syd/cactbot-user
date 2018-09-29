Options.SpokenAlertsEnabled = true;

Options.Triggers = [
    {
        ZoneRegex: /^Cutter's Cry$/, //this won't trigger in hardmodes, but I don't have them atm
        triggers: [
            {
                id: 'Ram Voice',
                regex: /:The chimera begins casting the Ram's voice/,

                alertText: function(data) {
                    return {
                        en: 'run away'
                    };
                },
                tts: {
                    en: 'run away'
                },
            },

            {
                id: 'Dragon voice',
                regex: /The chimera begins casting The Dragon's Voice/,
                alertText: function(data) {
                    return {
                        en: 'run towards'  
                    };
                },
                tts: {
                    en: 'run towards'
                },
            }
        ] //end of the cutters cry triggers
    } //end of the cutter's cry zone
];
