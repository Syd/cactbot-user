
console.log('my raidboss settings loaded');
Options.Debug = true;

Options.AlertsEnabled = true;
Options.TimelineEnabled = true;
Options.SpokenAlertsEnabled = true;
Options.SoundAlertsEnabled = true;

Options.Triggers = [
    {
        ZoneRegex: /^Cutter's Cry$/, //this won't trigger in hardmodes, but I don't have them atm
        // I tend to forget what the chimera mechanic is here because I don't go often
        // tl;dr run away when he casts ram's voice, run close to him when he cast's dragon's voice.
        triggers: [
            {
                id: 'Ram Voice',
                regex: /The chimera begins casting The Ram's Voice/,

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
    }, //end of the cutter's cry zone

    // Sunken temple reminders
    {
        ZoneRegex: /^The Sunken Temple of Qarn.*$/,
        // don't forget the stupid doom mechanic for Teratotaur
        triggers: [
            {
            id: 'doom',
            regex: /The teratotaur uses Mortal Ray/,
            alertText: function (data) {
                return {
                    en: 'run to lit panel'
                };
            },
                tts: {
                    en: 'clear doom stack'
                },
            },
        ]
    }
];
