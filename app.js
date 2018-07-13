var data = {
    page:'intro',
    correct:0,
    skipped:0,
    wrong:0,
    max:100,
    hours:0,
    mins:0,
    secs:0,
    answers:[],
    afields:[{key:'q',sortable:true},{key:'result',sortable:true},{key:'show_details',sortable:false}],
    sortBy:'q',
    sortDesc:true,
    selection:null,
    checked:false,
    q:null,
    qused:[],
    qlist:[
        {
            q:"If a generator is producing 500 MW and 200 Mvar, is the generator?",
            a:[
                {text:"Leading",correct:false},
                {text:'Lagging',correct:true},
                {text:'Underexcited',correct:false},
                {text:'Dropping',correct:false}]
        },
        {
            q:"What is the IEEE device number for a differential relay?",
            a:[
                {text:"87",correct:true},
                {text:'86',correct:false},
                {text:'67',correct:false},
                {text:'50',correct:false}
            ]
        },
        {
            q:"Can a synchronous machine have a negative torque angle? What does this mean?",
            a:[
                {text:'Yes / the machine is absorbing reactive power',correct:false},
                {text:'No / the machine is absorbing active power',correct:false},
                {text:'No / the machine is absorbing reactive power',correct:false},
                {text:'Yes / the machine is absorbing active power',correct:true}
            ]
        },
        {
            "q": "A customer load is fed at 120 volts. The custoemr voltage is doubled while the load magnitude stays the same. What effect does this have on the power losses?",
            "a": [
             {
              "text": "Doubles the losses",
              "correct": false
             },
             {
              "text": "Halves the losses",
              "correct": false
             },
             {
              "text": "Increases the losses by a factor of four",
              "correct": false
             },
             {
              "text": "Decreases the losses by a factor of four",
              "correct": true
             }
            ]
           },
           {
            "q": "In a DC circuit, a 100 volt battery is connected to both sides of a 2 ohm resistor. What is the current through the resistor and the power usage of the resistor?",
            "a": [
             {
              "text": "50 amps / 5000 watts",
              "correct": true
             },
             {
              "text": "40 amps / 80 watts",
              "correct": false
             },
             {
              "text": "50 amps / 100 watts",
              "correct": false
             },
             {
              "text": "40 amps / 3200 watts",
              "correct": false
             }
            ]
           },
           {
            "q": "The actual voltage is 362 kV on a 345 kV bus. What is the p.u. voltage?",
            "a": [
             {
              "text": "1.0",
              "correct": false
             },
             {
              "text": "1.05",
              "correct": true
             },
             {
              "text": "1.5",
              "correct": false
             },
             {
              "text": ".95",
              "correct": false
             }
            ]
           },
           {
            "q": "A load has a power factor of 0.9 lagging. If the load draws 100 MVA, what is the MW draw?",
            "a": [
             {
              "text": "100",
              "correct": false
             },
             {
              "text": "90",
              "correct": true
             },
             {
              "text": "111",
              "correct": false
             },
             {
              "text": "44",
              "correct": false
             }
            ]
           },
           {
            "q": "Which of the following is NOT a synchronizing variable?",
            "a": [
             {
              "text": "Phase Angle",
              "correct": false
             },
             {
              "text": "Frequency difference",
              "correct": false
             },
             {
              "text": "Voltage magnitude difference",
              "correct": false
             },
             {
              "text": "MW flow differential",
              "correct": true
             }
            ]
           },
           {
            "q": "In a typical multi-stage steam turbine, the governor control valves control the steam entry to the:",
            "a": [
             {
              "text": "high pressure turbine",
              "correct": true
             },
             {
              "text": "intermediate pressure turbine",
              "correct": false
             },
             {
              "text": "low pressure turbine",
              "correct": false
             },
             {
              "text": "crossover",
              "correct": false
             }
            ]
           },
           {
            "q": "The high side of a delta-wye connected transformer is connected to a power system with 199 kV L-G high side voltage. What is the voltage across the winding of the delta transformer?",
            "a": [
             {
              "text": "199 kV",
              "correct": false
             },
             {
              "text": "230 kV",
              "correct": false
             },
             {
              "text": "345 kV",
              "correct": true
             },
             {
              "text": "500 kV",
              "correct": false
             }
            ]
           },
           {
            "q": "Thermal limits are the direct result of?",
            "a": [
             {
              "text": "high torque and power angles",
              "correct": false
             },
             {
              "text": "The thermal cacpability of system equipment",
              "correct": true
             },
             {
              "text": "A reactive power deficiency",
              "correct": false
             },
             {
              "text": "All of the above",
              "correct": false
             }
            ]
           },
           {
            "q": "Reactive power flow is influenced more by system power and torque angles than reactive power.",
            "a": [
             {
              "text": "True",
              "correct": false
             },
             {
              "text": "False",
              "correct": true
             }
            ]
           },
           {
            "q": "At what line power angle does the MW transfer across a trnsmission path equal 1/2 of the path's Pmax?",
            "a": [
             {
              "text": "15 degrees",
              "correct": false
             },
             {
              "text": "20 degrees",
              "correct": false
             },
             {
              "text": "30 degrees",
              "correct": true
             },
             {
              "text": "45 degrees",
              "correct": false
             }
            ]
           },
           {
            "q": "A transmission line is rated at 1000 MVA. The power flow is currently 0 MW and 1001 MVAR. Is the transmission line overloaded?",
            "a": [
             {
              "text": "Yes",
              "correct": true
             },
             {
              "text": "No",
              "correct": false
             },
             {
              "text": "Impossible to determine",
              "correct": false
             },
             {
              "text": "The line has no load",
              "correct": false
             }
            ]
           },
           {
            "q": "The TTC limit has been determined to be 1000 MW from east to west for a particular transmission path. The transmission path operator sells 500 MW of this TTC. What is the path's ATC?",
            "a": [
             {
              "text": "1000 MW",
              "correct": false
             },
             {
              "text": "1500 MW",
              "correct": false
             },
             {
              "text": "0 MW",
              "correct": false
             },
             {
              "text": "500 MW",
              "correct": true
             }
            ]
           },
           {
            "q": "A distribution line is rated at 50 MVA. The line's power flow is currently 50 MW and -50 Mvar. This distribution line is overloaded.",
            "a": [
             {
              "text": "True",
              "correct": true
             },
             {
              "text": "False",
              "correct": false
             }
            ]
           },
           {
            "q": "Angle stability limits are the result of?",
            "a": [
             {
              "text": "High torque and power angles",
              "correct": true
             },
             {
              "text": "The thermal capability of system equipment",
              "correct": false
             },
             {
              "text": "A reactive power deficiency",
              "correct": false
             },
             {
              "text": "All of the above",
              "correct": false
             }
            ]
           },
           {
            "q": "If the resistance is ignored, the maximum theoretical MW flow across a transmission lilne will occur at a power angle of:",
            "a": [
             {
              "text": "0 degrees",
              "correct": false
             },
             {
              "text": "45 degrees",
              "correct": false
             },
             {
              "text": "90 degrees",
              "correct": true
             },
             {
              "text": "180 degrees",
              "correct": false
             }
            ]
           },
           {
            "q": "If the resistance is ignored, the maximum theoretical Mvar flow across a transmission line will occur at a power angle of:",
            "a": [
             {
              "text": "0 degrees",
              "correct": false
             },
             {
              "text": "45 degrees",
              "correct": false
             },
             {
              "text": "90 degrees",
              "correct": false
             },
             {
              "text": "180 degrees",
              "correct": true
             }
            ]
           },
           {
            "q": "200 MW is scheduled to flow from Bus X to Bus Y. Transmission line A-B has a 10% distribution factor for this schedule. How much of the 200 MW schedule will flow on transmission line A-B?",
            "a": [
             {
              "text": "20 MW",
              "correct": true
             },
             {
              "text": "40 MW",
              "correct": false
             },
             {
              "text": "180 MW",
              "correct": false
             },
             {
              "text": "200 MW",
              "correct": false
             }
            ]
           },
           {
            "q": "According to the load/frequency relationship, a 1% change in frequency will lead to what approximate magnitude of load change in a typical 10,000 MW system?",
            "a": [
             {
              "text": "500 MW",
              "correct": false
             },
             {
              "text": "1000 MW",
              "correct": false
             },
             {
              "text": "200 MW",
              "correct": true
             },
             {
              "text": "50 MW",
              "correct": false
             }
            ]
           },
           {
            "q": "A governor with a 0% droop is called:",
            "a": [
             {
              "text": "Flat frequency control",
              "correct": false
             },
             {
              "text": "Transient droopo",
              "correct": false
             },
             {
              "text": "A blocked governor",
              "correct": false
             },
             {
              "text": "An isochronous governor",
              "correct": true
             }
            ]
           },
           {
            "q": "Steam turbine generators typically have better governor response than hydro-electric generating units.",
            "a": [
             {
              "text": "True",
              "correct": false
             },
             {
              "text": "False",
              "correct": true
             }
            ]
           },
           {
            "q": "A Balancing Authority's frequency bias setting is equal to:",
            "a": [
             {
              "text": "The control area's frequency response characteristic (FRC)",
              "correct": false
             },
             {
              "text": "The natural response of the control area",
              "correct": false
             },
             {
              "text": "The AGC system's bias value",
              "correct": false
             },
             {
              "text": "All of the above",
              "correct": true
             }
            ]
           },
           {
            "q": "All of the following are modes of AGC, except:",
            "a": [
             {
              "text": "Flat tie-line control",
              "correct": false
             },
             {
              "text": "Isochronous control",
              "correct": true
             },
             {
              "text": "Flat frequency control",
              "correct": false
             },
             {
              "text": "Tie-line bias control",
              "correct": false
             }
            ]
           },
           {
            "q": "In which stae of a generator's response to a system disturbance is the power flow supported primarily by the generator's excitation system?",
            "a": [
             {
              "text": "Governor response stage",
              "correct": false
             },
             {
              "text": "AGC stage",
              "correct": false
             },
             {
              "text": "Electromagnetic energy stage",
              "correct": true
             },
             {
              "text": "Inertial stage",
              "correct": false
             }
            ]
           },
           {
            "q": "If system frequency were to run at 60.02 HZ for two consecutive hours, how much positive time error would occur?",
            "a": [
             {
              "text": "2.0 seconds",
              "correct": false
             },
             {
              "text": "2.4 seconds",
              "correct": true
             },
             {
              "text": "1.0 seconds",
              "correct": false
             },
             {
              "text": "1.2 seconds",
              "correct": false
             }
            ]
           },
           {
            "q": "A Balancing Authority has a bias of -150 MW. Frequency falls 0.05 HZ due to an external disturbance. How many HW would you expect this Balancing Authority to provide to the disturbance?",
            "a": [
             {
              "text": "-75",
              "correct": false
             },
             {
              "text": "+75",
              "correct": true
             },
             {
              "text": "-150",
              "correct": false
             },
             {
              "text": "+150",
              "correct": false
             }
            ]
           },
           {
            "q": "An isochronous governor has a droop setting of:",
            "a": [
             {
              "text": "5%",
              "correct": false
             },
             {
              "text": "0%",
              "correct": true
             },
             {
              "text": "10%",
              "correct": false
             },
             {
              "text": "8%",
              "correct": false
             }
            ]
           },
           {
            "q": "What element of the power system is typically most susceptible to damage from prolonged operation at frequencies above or below 60 HZ?",
            "a": [
             {
              "text": "Transformers greater than 300 MVA",
              "correct": false
             },
             {
              "text": "Low pressure turbine stage blades",
              "correct": true
             },
             {
              "text": "Synchronous motors",
              "correct": false
             },
             {
              "text": "Induction motors",
              "correct": false
             }
            ]
           },
           {
            "q": "Hydro-electric generators typically exhibit better governor response than thermal generators because:",
            "a": [
             {
              "text": "Hydro-electric generators typically have more stored energy",
              "correct": true
             },
             {
              "text": "Thermal generators typically do not carry spinning reserve",
              "correct": false
             },
             {
              "text": "Water is a better conductor than steam",
              "correct": false
             },
             {
              "text": "Hydro-electric generators utilize microprocessor based governors while thermal units utilize mechanical governors",
              "correct": false
             }
            ]
           },
           {
            "q": "A generator with a 6% droop governor is connected to a 60 HZ power system. Initially, the generator is at 100% load. Frequency then falls 0.9 HZ. What is the generator's new % output?",
            "a": [
             {
              "text": "75%",
              "correct": false
             },
             {
              "text": "100%",
              "correct": true
             },
             {
              "text": "0%",
              "correct": false
             },
             {
              "text": "25%",
              "correct": false
             }
            ]
           },
           {
            "q": "What magnitude of frequency change would cause a 10% droop governor to move its generator from zero to full output in a 60 HZ system?",
            "a": [
             {
              "text": "6 HZ",
              "correct": true
             },
             {
              "text": "10 HZ",
              "correct": false
             },
             {
              "text": "3 HZ",
              "correct": false
             },
             {
              "text": "5 HZ",
              "correct": false
             }
            ]
           },
           {
            "q": "Which component of the CPS is intended to limit the magnitude of unscheduled power flows?",
            "a": [
             {
              "text": "DCS 1",
              "correct": false
             },
             {
              "text": "DCS 2",
              "correct": false
             },
             {
              "text": "CPS 1",
              "correct": false
             },
             {
              "text": "CPS 2",
              "correct": true
             }
            ]
           },
           {
            "q": "What is the uppoer limit to the CPS1 magnitude?",
            "a": [
             {
              "text": "50%",
              "correct": false
             },
             {
              "text": "100%",
              "correct": false
             },
             {
              "text": "200%",
              "correct": false
             },
             {
              "text": "No limit",
              "correct": true
             }
            ]
           },
           {
            "q": "What is the Mvar production of a 50 Mvar shunt capacitor that is energized at 90% of its nominal voltage?",
            "a": [
             {
              "text": "40.5",
              "correct": true
             },
             {
              "text": "45",
              "correct": false
             },
             {
              "text": "55.6",
              "correct": false
             },
             {
              "text": "61.7",
              "correct": false
             }
            ]
           },
           {
            "q": "A 5% change in voltage will typically lead to what change in the total load magnitude?",
            "a": [
             {
              "text": "2%",
              "correct": false
             },
             {
              "text": "3%",
              "correct": true
             },
             {
              "text": "5%",
              "correct": false
             },
             {
              "text": "10%",
              "correct": false
             }
            ]
           },
           {
            "q": "A transformer can be overexcited if exposed to:",
            "a": [
             {
              "text": "High voltage",
              "correct": false
             },
             {
              "text": "Low frequency",
              "correct": false
             },
             {
              "text": "High voltage and low frequency",
              "correct": false
             },
             {
              "text": "All of the above",
              "correct": true
             }
            ]
           },
           {
            "q": "What is the approximate Mvar/Mile production for a 345 kV overhead line?",
            "a": [
             {
              "text": "1/3",
              "correct": false
             },
             {
              "text": "3/4",
              "correct": true
             },
             {
              "text": "2.0",
              "correct": false
             },
             {
              "text": "5.0",
              "correct": false
             }
            ]
           },
           {
            "q": "A 345 kV transmission line operates at various voltage levels throughout the day. At which voltage level will the transmission line produce more reactive power?",
            "a": [
             {
              "text": "345 kV",
              "correct": false
             },
             {
              "text": "340 kV",
              "correct": false
             },
             {
              "text": "350 kV",
              "correct": false
             },
             {
              "text": "360 kV",
              "correct": true
             }
            ]
           },
           {
            "q": "A transmission line has 50 ohms of inductive reactance. 25 ohms of series capacitors are inserted in the line. What is the line's % series compensation?",
            "a": [
             {
              "text": "25%",
              "correct": false
             },
             {
              "text": "40%",
              "correct": false
             },
             {
              "text": "50%",
              "correct": true
             },
             {
              "text": "80%",
              "correct": false
             }
            ]
           },
           {
            "q": "A transmission line's _________ is the MW loading at which the Mvar from the line's natural capacitance is equal to the Mvar the line needs to support its voltage.",
            "a": [
             {
              "text": "surge impedance loading",
              "correct": true
             },
             {
              "text": "angle stability limit",
              "correct": false
             },
             {
              "text": "voltage stability limit",
              "correct": false
             },
             {
              "text": "thermal limit",
              "correct": false
             }
            ]
           },
           {
            "q": "What is the approximate Mvar/Mile production for a 500 kV overhead line?",
            "a": [
             {
              "text": "1/3",
              "correct": false
             },
             {
              "text": "3/4",
              "correct": false
             },
             {
              "text": "2.0",
              "correct": true
             },
             {
              "text": "5.0",
              "correct": false
             }
            ]
           },
           {
            "q": "Given a purely inductive load, what can be said about the MVA this load draws from the power system?",
            "a": [
             {
              "text": "The load draws only MW",
              "correct": false
             },
             {
              "text": "The load draws only Mvar",
              "correct": true
             },
             {
              "text": "The load magnitude cannot exceed 100 MVA",
              "correct": false
             },
             {
              "text": "The load magnitude cannot exceed 1000 MVA",
              "correct": false
             }
            ]
           },
           {
            "q": "A generator with spare Mvar is always a source of dynamic reactive reserve.",
            "a": [
             {
              "text": "True",
              "correct": false
             },
             {
              "text": "False",
              "correct": true
             }
            ]
           },
           {
            "q": "The nominal load is:",
            "a": [
             {
              "text": "Equal to the rated load",
              "correct": true
             },
             {
              "text": "Dependent on the actual voltage and frequency",
              "correct": false
             },
             {
              "text": "Dependent on the scheduled voltage and frequency",
              "correct": false
             },
             {
              "text": "Equal to the actual load",
              "correct": false
             }
            ]
           },
           {
            "q": "A period of voltage instability will always result in a voltage collapse.",
            "a": [
             {
              "text": "True",
              "correct": false
             },
             {
              "text": "False",
              "correct": true
             }
            ]
           },
           {
            "q": "The critical voltage and critical MW transfer are located at the:",
            "a": [
             {
              "text": "Knee of the V-Q curve",
              "correct": false
             },
             {
              "text": "Knee of the P-V curve",
              "correct": true
             },
             {
              "text": "Origin of the V-Q curve",
              "correct": false
             },
             {
              "text": "Origin of the P-V curve",
              "correct": false
             }
            ]
           },
           {
            "q": "During voltage collapse prone conditions, tap changing to support secondary voltage should generally NOT be used if the secondary load is formed by:",
            "a": [
             {
              "text": "Induction motors",
              "correct": false
             },
             {
              "text": "Motor type load",
              "correct": false
             },
             {
              "text": "Nominal load",
              "correct": false
             },
             {
              "text": "Non-motor type load",
              "correct": true
             }
            ]
           },
           {
            "q": "P-V curves indicate the _______ margin from voltage instability while V-Q curves indicate the _______ margin from voltage instability.",
            "a": [
             {
              "text": "Mvar / MW",
              "correct": false
             },
             {
              "text": "MW / Mvar",
              "correct": true
             },
             {
              "text": "MW / current",
              "correct": false
             },
             {
              "text": "Power / Mvar",
              "correct": false
             }
            ]
           },
           {
            "q": "UVLS differs from UFLS in that:",
            "a": [
             {
              "text": "The tripping frequencies are different",
              "correct": false
             },
             {
              "text": "The tap chainging points are different",
              "correct": false
             },
             {
              "text": "UVLS is based on voltage while UFLS is based on frequency",
              "correct": true
             },
             {
              "text": "UVLS is based on frequency while UFLS is based on voltage",
              "correct": false
             }
            ]
           },
           {
            "q": "In what type of voltage instability does a key element outage trigger the instability?",
            "a": [
             {
              "text": "Oscillation Voltage Instability",
              "correct": false
             },
             {
              "text": "Classical Voltage Instability",
              "correct": true
             },
             {
              "text": "Transient Voltage Instability",
              "correct": false
             },
             {
              "text": "Long Term Voltage Instability",
              "correct": false
             }
            ]
           },
           {
            "q": "A P-V curve relates:",
            "a": [
             {
              "text": "The Mvar transferred across a system to the voltage at the receiving end of the system",
              "correct": false
             },
             {
              "text": "The MW transferred across a system to the voltage at the receiving end of the system",
              "correct": true
             },
             {
              "text": "The MW transerred across a system to the voltage at the sending end of the system",
              "correct": false
             },
             {
              "text": "The Mvar transferred across a system to the voltage at the sending end of the system",
              "correct": false
             }
            ]
           },
           {
            "q": "In a radial power system, the adition of shunt capacitors at the receiving end of the system tends to:",
            "a": [
             {
              "text": "Decrease the curvature of the P-V curve",
              "correct": false
             },
             {
              "text": "Flatten the P-V curve and increase the critical voltage",
              "correct": true
             },
             {
              "text": "Increase the curvature of the P-V curve",
              "correct": false
             },
             {
              "text": "Flatten the P-V curve and decrease the critical voltage",
              "correct": false
             }
            ]
           },
           {
            "q": "In which type of voltage instability does a simultaneous stalling of large amounts of induction motor load trigger the voltage instability?",
            "a": [
             {
              "text": "Oscillation Voltage Instability",
              "correct": false
             },
             {
              "text": "Classical Voltage Instability",
              "correct": false
             },
             {
              "text": "Trasient Voltage Instability",
              "correct": true
             },
             {
              "text": "Long Term Voltage Instability",
              "correct": false
             }
            ]
           },
           {
            "q": "The loss of the magnetic bonds that bind together the elements of a power system is known as:",
            "a": [
             {
              "text": "Angle stability",
              "correct": false
             },
             {
              "text": "Loss of synchronism",
              "correct": false
             },
             {
              "text": "Out-of-step",
              "correct": false
             },
             {
              "text": "All of the above",
              "correct": true
             }
            ]
           },
           {
            "q": "If a 2-pole generator's rotor is spinning at 3601 RPM while the generator is connected to a 60 HZ system, how fast is the genenrator's torque anngle changing?",
            "a": [
             {
              "text": "3 degrees per secon",
              "correct": false
             },
             {
              "text": "0 degrees per second",
              "correct": false
             },
             {
              "text": "9 degrees per second",
              "correct": false
             },
             {
              "text": "6 degrees per second",
              "correct": true
             }
            ]
           },
           {
            "q": "Neglecting losses, the difference between a generator's mechanical power input and electrical power output is called:",
            "a": [
             {
              "text": "Relative power",
              "correct": false
             },
             {
              "text": "Synchronizing power",
              "correct": false
             },
             {
              "text": "Stability power",
              "correct": false
             },
             {
              "text": "Accelerating power",
              "correct": true
             }
            ]
           },
           {
            "q": "According to the equal area criterion for transient stability:",
            "a": [
             {
              "text": "The torque angle must never exceed 90 degrees",
              "correct": false
             },
             {
              "text": "The accelerating area must exceed the decelerating area",
              "correct": false
             },
             {
              "text": "The decelerating area must at least match the accelerating area",
              "correct": true
             },
             {
              "text": "None of the above",
              "correct": false
             }
            ]
           },
           {
            "q": "A generator is angle unstable whenever its torque angle exceeds 90 degrees.",
            "a": [
             {
              "text": "True",
              "correct": false
             },
             {
              "text": "False",
              "correct": true
             }
            ]
           },
           {
            "q": "High speed trannsmission protection is a benefit to angle stability because:",
            "a": [
             {
              "text": "Fault duration is reduced",
              "correct": false
             },
             {
              "text": "Accelerating time is reduced",
              "correct": false
             },
             {
              "text": "Angle spread is reduced",
              "correct": false
             },
             {
              "text": "All of the above",
              "correct": true
             }
            ]
           },
           {
            "q": "The primary difference between an out-of-step event and a fault is:",
            "a": [
             {
              "text": "Out-of-step events are detected by distance relays while faults are not",
              "correct": false
             },
             {
              "text": "Faults are detected by distance relays while out-of-step events are not",
              "correct": false
             },
             {
              "text": "The location at which the low voltage occurs",
              "correct": false
             },
             {
              "text": "The speed at which the apparent impedance changes",
              "correct": true
             }
            ]
           },
           {
            "q": "Typical power oscillation frequenies vary from:",
            "a": [
             {
              "text": "0.001 HZ to .0001 HZ",
              "correct": false
             },
             {
              "text": "100 HZ to 80 HZ",
              "correct": false
             },
             {
              "text": "60 HZ to 30 HZ",
              "correct": false
             },
             {
              "text": "0.05 HZ to 3.0 HZ",
              "correct": true
             }
            ]
           },
           {
            "q": "Amortisseur windings are:",
            "a": [
             {
              "text": "Extra windings in a transformer's magnetic core",
              "correct": false
             },
             {
              "text": "Conducting bars embedded in the magnetic poles of a rotor",
              "correct": true
             },
             {
              "text": "A type of hydro generator stator winding",
              "correct": false
             },
             {
              "text": "A type of circuit breaker tripping coil typically used in SF6 breakers",
              "correct": false
             }
            ]
           },
           {
            "q": "Which of the following will tend to increase a generator's natural frequency of oscillation?",
            "a": [
             {
              "text": "Strong transmission system",
              "correct": true
             },
             {
              "text": "Higher inertia",
              "correct": false
             },
             {
              "text": "Weak transmission system",
              "correct": false
             },
             {
              "text": "High power output",
              "correct": false
             }
            ]
           },
           {
            "q": "Which mode of power oscillations typically appears on the major tie-lines that connect large power systems?",
            "a": [
             {
              "text": "Intra-area mode",
              "correct": false
             },
             {
              "text": "Inter-area mode",
              "correct": true
             },
             {
              "text": "Intra-plant mode",
              "correct": false
             },
             {
              "text": "Local mode",
              "correct": false
             }
            ]
           },
           {
            "q": "High speed systems tend to extend ________ stability limits but may lead to ________ instability.",
            "a": [
             {
              "text": "Transient / steady state",
              "correct": false
             },
             {
              "text": "Oscillatory / transient",
              "correct": false
             },
             {
              "text": "Steady state / transient",
              "correct": false
             },
             {
              "text": "Transient / oscillatory",
              "correct": true
             }
            ]
           },
           {
            "q": "Which of the following are used to dampen power system oscillations?",
            "a": [
             {
              "text": "HVDC modulation",
              "correct": false
             },
             {
              "text": "Amortisseur windings",
              "correct": false
             },
             {
              "text": "PSS",
              "correct": false
             },
             {
              "text": "All of the above",
              "correct": true
             }
            ]
           },
           {
            "q": "Which type of power oscillations are of most concern?",
            "a": [
             {
              "text": "Negatively damped",
              "correct": true
             },
             {
              "text": "Damped",
              "correct": false
             },
             {
              "text": "Undamped",
              "correct": false
             },
             {
              "text": "Positively damped",
              "correct": false
             }
            ]
           },
           {
            "q": "Which of the following will tend to decrease a generator's natural frequency of oscillation? 1. Higher inertia  2. Weak transmission system  3. High power output  4. Strong transmission system",
            "a": [
             {
              "text": "2 and 4",
              "correct": false
             },
             {
              "text": "1 and 2",
              "correct": false
             },
             {
              "text": "4",
              "correct": false
             },
             {
              "text": "1, 2, and 3",
              "correct": true
             }
            ]
           },
           {
            "q": "Which mode of power oscillations does every generator participate in?",
            "a": [
             {
              "text": "Intra-plant mode",
              "correct": false
             },
             {
              "text": "Inter-area mode",
              "correct": false
             },
             {
              "text": "Intra-area mode",
              "correct": false
             },
             {
              "text": "Local mode",
              "correct": true
             }
            ]
           },
           {
            "q": "On August 10, 1996, large 0.224 H power oscillations were measured in the Pacific AC Intertie 500 kV  lines. These oscillations were:",
            "a": [
             {
              "text": "Intra-area mode",
              "correct": false
             },
             {
              "text": "Local mode",
              "correct": false
             },
             {
              "text": "Inter-plant mode",
              "correct": false
             },
             {
              "text": "Inter-area mode",
              "correct": true
             }
            ]
           },
           {
            "q": "Delta connected three-phase transformer windings trap the:",
            "a": [
             {
              "text": "Odd harmonics",
              "correct": false
             },
             {
              "text": "Even harmonics",
              "correct": false
             },
             {
              "text": "High order harmonics",
              "correct": false
             },
             {
              "text": "Triplen harmonics",
              "correct": true
             }
            ]
           },
           {
            "q": "If the inductannce is 0.001 henry and the capacitance is .000782 farad, what is the resonance frequency?",
            "a": [
             {
              "text": "300 HZ",
              "correct": false
             },
             {
              "text": "60 HZ",
              "correct": false
             },
             {
              "text": "180 HZ",
              "correct": true
             },
             {
              "text": "240 HZ",
              "correct": false
             }
            ]
           },
           {
            "q": "All of the following are forms of SSR, except:",
            "a": [
             {
              "text": "Induction generator effect",
              "correct": false
             },
             {
              "text": "Transient torque",
              "correct": false
             },
             {
              "text": "Parallel induction",
              "correct": true
             },
             {
              "text": "Torsional interaction",
              "correct": false
             }
            ]
           },
           {
            "q": "SSR is more of a concern with hydroelectric units than with thermal units.",
            "a": [
             {
              "text": "True",
              "correct": false
             },
             {
              "text": "False",
              "correct": true
             }
            ]
           },
           {
            "q": "All of the following are methods of preventing distribution system ferroresonance, except:",
            "a": [
             {
              "text": "Use grounded-wye to delta transformer connections",
              "correct": true
             },
             {
              "text": "Keep resistive load connected to the transformer during switching",
              "correct": false
             },
             {
              "text": "Switch at the transformer end of the distribution line",
              "correct": false
             },
             {
              "text": "Use three-phases switching",
              "correct": false
             }
            ]
           },
           {
            "q": "The currents that flow in the earth's surface as a result of solar magnetic disturbances are called:",
            "a": [
             {
              "text": "Electrojets",
              "correct": false
             },
             {
              "text": "Geomagnetic induced currents",
              "correct": true
             },
             {
              "text": "Earth surface potentials",
              "correct": false
             },
             {
              "text": "sunspot currents",
              "correct": false
             }
            ]
           },
           {
            "q": "The currents induced by solar magnetic disturbances enter the power system via:",
            "a": [
             {
              "text": "Series capacitors",
              "correct": false
             },
             {
              "text": "Shunt capacitors",
              "correct": false
             },
             {
              "text": "Trannsformer delta windings",
              "correct": false
             },
             {
              "text": "Transformer grounded neutrals",
              "correct": true
             }
            ]
           },
           {
            "q": "In a 60 HZ system, the frequency of the 8th Harmonic is:",
            "a": [
             {
              "text": "480 HZ",
              "correct": true
             },
             {
              "text": "100 HZ",
              "correct": false
             },
             {
              "text": "200 HZ",
              "correct": false
             },
             {
              "text": "300 HZ",
              "correct": false
             }
            ]
           },
           {
            "q": "Shunt capacitor trippings can be a problem during SMD activity. Why?",
            "a": [
             {
              "text": "Because high frequency GIC currents flow in to the shunt capacitors",
              "correct": false
             },
             {
              "text": "Because GIC currents saturate transformers which creates high frequency harmonics which cause the shunt capacitors to trip",
              "correct": true
             },
             {
              "text": "Because GIC currents enter the power system through the grounded neutrals of the shunt capacitors",
              "correct": false
             },
             {
              "text": "Because shunt capacitors trip from high ESP",
              "correct": false
             }
            ]
           },
           {
            "q": "Assume a transmission line has a series inductive reactance of 100 ohms and a series capacitive reactance of 50 ohms. What aount of series capacitance (in ohms) must be added to create a series resonance condition?",
            "a": [
             {
              "text": "100",
              "correct": false
             },
             {
              "text": "50",
              "correct": true
             },
             {
              "text": "25",
              "correct": false
             },
             {
              "text": "150",
              "correct": false
             }
            ]
           },
           {
            "q": "Which type of HVDC system has two conductors, one energized with a positive voltage and one with a negative voltage?",
            "a": [
             {
              "text": "Semipolar",
              "correct": false
             },
             {
              "text": "Bipolar",
              "correct": true
             },
             {
              "text": "Unipolar",
              "correct": false
             },
             {
              "text": "Monopolar",
              "correct": false
             }
            ]
           },
           {
            "q": "Thyrister and mercury-arc are types of ________ in HVDC converters.",
            "a": [
             {
              "text": "Transformers",
              "correct": false
             },
             {
              "text": "Electrodes",
              "correct": false
             },
             {
              "text": "Valves",
              "correct": true
             },
             {
              "text": "Filters",
              "correct": false
             }
            ]
           },
           {
            "q": "A twelve-pulse converter has twelve pulses in its DC output per:",
            "a": [
             {
              "text": "Commutation of the converter",
              "correct": false
             },
             {
              "text": "Cycle of the HVDC converter from no load to full load",
              "correct": false
             },
             {
              "text": "Chage of the firing anngle from 0 to 30 degree",
              "correct": false
             },
             {
              "text": "Cycle of the incoming AC voltage",
              "correct": true
             }
            ]
           },
           {
            "q": "An HVDC converter firing angle is used to:",
            "a": [
             {
              "text": "Delay inversion",
              "correct": false
             },
             {
              "text": "Delay commutation",
              "correct": true
             },
             {
              "text": "Delay convnersion",
              "correct": false
             },
             {
              "text": "Delay rectificationn",
              "correct": false
             }
            ]
           },
           {
            "q": "A phase shifting transformer controls MW flow by:",
            "a": [
             {
              "text": "Controlling the firing angle",
              "correct": false
             },
             {
              "text": "Controlling the phase angle between voltage and current",
              "correct": false
             },
             {
              "text": "Controlling the voltage phase angle across the transformer",
              "correct": true
             },
             {
              "text": "Controlling the phase angle between current and voltage",
              "correct": false
             }
            ]
           },
           {
            "q": "The voltage added to the incoming voltage to be regulated is added in ________ in a phase shifting transformer and added in ________ in a voltage regulating transformer.",
            "a": [
             {
              "text": "series / quadrature",
              "correct": false
             },
             {
              "text": "series / series",
              "correct": false
             },
             {
              "text": "quadrature / quadrature",
              "correct": false
             },
             {
              "text": "quadrature / series",
              "correct": true
             }
            ]
           },
           {
            "q": "Several HVDC systems are used to electrically connect the Eastern and Western Interconnections of North America. Since both Interconnections are 60 HZ systems, why would HVDC be used?",
            "a": [
             {
              "text": "Because even though both Interconnection's frequencies are scheduled for 60 HZ, large voltage phase angles and small frequency differences do exist.",
              "correct": true
             },
             {
              "text": "Because the lines connecting the Interconnections are long enough to justify HVDC system cost",
              "correct": false
             },
             {
              "text": "Because the lines connecting the Interconnections are short enough for justifying the HVDC system cost",
              "correct": false
             },
             {
              "text": "Because HVDC systems are always less costly to build than an equivalent AC system",
              "correct": false
             }
            ]
           },
           {
            "q": "When compared to an AC transmission system with the same MW transfer, the same insulation levels, and with the same size conductors, HVDC transmission system losses are approximately 33% lower than AC system losses.",
            "a": [
             {
              "text": "True",
              "correct": true
             },
             {
              "text": "False",
              "correct": false
             }
            ]
           },
           {
            "q": "The functions of an HVDC system smoothing reactor include all the following, except:",
            "a": [
             {
              "text": "Reducing DC ripple",
              "correct": false
             },
             {
              "text": "Reducing DC fault duty",
              "correct": false
             },
             {
              "text": "Assisting with the commutation process",
              "correct": false
             },
             {
              "text": "Filtering the AC harmonics",
              "correct": true
             }
            ]
           },
           {
            "q": "A 200 MW HVDC system is installed next to a 138 kV AC substation. The three-phase fault duty of the 138 kV bust must be at least ________ MVA.",
            "a": [
             {
              "text": "67-100",
              "correct": false
             },
             {
              "text": "101-201",
              "correct": false
             },
             {
              "text": "400-600",
              "correct": true
             },
             {
              "text": "1000 or greater",
              "correct": false
             }
            ]
           },
           {
            "q": "In the initial stages of a restoration condition, high transmission system voltage problems are more likely than low transmission system voltage problems. Why?",
            "a": [
             {
              "text": "Because of the excessive Mvar supply from too many on-line generators",
              "correct": false
             },
             {
              "text": "Because of the deficiency in Mvar from too much customer load energization",
              "correct": false
             },
             {
              "text": "Because of th deficiency in MW fro too much customer load energization",
              "correct": false
             },
             {
              "text": "Because of the excessive Mvar supply from the energization of transmission lines",
              "correct": true
             }
            ]
           },
           {
            "q": "A synchroscope can be used to determine the standing phase angle across an open CB even if the power system on both sides of the open CB is interconnected.",
            "a": [
             {
              "text": "True",
              "correct": true
             },
             {
              "text": "False",
              "correct": false
             }
            ]
           },
           {
            "q": "Generators and alrge motors are often equipped with negative sequence relays. The negatie sequence relay is designed to:",
            "a": [
             {
              "text": "Detect reverse rotation of the machine's shaft",
              "correct": false
             },
             {
              "text": "Detect imbalance in the machine's phase currents",
              "correct": true
             },
             {
              "text": "Detect A-C-B phase rotation",
              "correct": false
             },
             {
              "text": "Detect OOS conditions",
              "correct": false
             }
            ]
           },
           {
            "q": "During which phase of the restoration process is the voltage and frequency of the generators that survived the initial disturbance adjusted to optimum values:",
            "a": [
             {
              "text": "Phase 4: Billing",
              "correct": false
             },
             {
              "text": "Phase 2: Preparation of Subsystems",
              "correct": true
             },
             {
              "text": "Phase 1: Assessment",
              "correct": false
             },
             {
              "text": "Phase 3: Establishment of Target Systems",
              "correct": false
             }
            ]
           },
           {
            "q": "In the early stages of a system restoration, the energization of customer load with a ________ is usually helpful as this type of load absorbs excess Mvar from the energized transmission lines.",
            "a": [
             {
              "text": "low lagging power factor",
              "correct": true
             },
             {
              "text": "high leading power factor",
              "correct": false
             },
             {
              "text": "low leading power factor",
              "correct": false
             },
             {
              "text": "high lagging power factor",
              "correct": false
             }
            ]
           },
           {
            "q": "A 200 mile long 500 kV line is transposed at two locations along the line. The purpose of transposition is to:",
            "a": [
             {
              "text": "Balance each phase's inductive reactance value",
              "correct": true
             },
             {
              "text": "Reduce the Ferranti Rise effect",
              "correct": false
             },
             {
              "text": "Increase the power transfer limit",
              "correct": false
             },
             {
              "text": "Reduce each phase conductor's resistance",
              "correct": false
             }
            ]
           },
           {
            "q": "In the early stages of a system restoration, the frequency has stabilized at 59 HZ. The system operator has decided to shed load to restore the frequency to 60 HZ. How much load should the system operator shed to raise the frequency 1 HZ?",
            "a": [
             {
              "text": "3 to 5% of the connected load",
              "correct": false
             },
             {
              "text": "10 to 15% of the connected load",
              "correct": false
             },
             {
              "text": "6 to 10% of the connected load",
              "correct": true
             },
             {
              "text": "1 to 3% of the connected load",
              "correct": false
             }
            ]
           },
           {
            "q": "Why would a power transformer's differential relay be equipped with a harmonic restraint feature?",
            "a": [
             {
              "text": "To avoid relay activation when the transformer is first energized",
              "correct": true
             },
             {
              "text": "To avoid relay activation when the transformer is de-energized",
              "correct": false
             },
             {
              "text": "To reduce the amount of harmonics created by the power transformer",
              "correct": false
             },
             {
              "text": "To restrain the transformer from operating as an overly aggresive harmonic filter",
              "correct": false
             }
            ]
           },
           {
            "q": "Which of the following types of units could most likely operate, without damage, as a motor?",
            "a": [
             {
              "text": "Hydro turbine",
              "correct": true
             },
             {
              "text": "Nuclear drive steam turbine",
              "correct": false
             },
             {
              "text": "Combustion turbine",
              "correct": false
             },
             {
              "text": "Coal driven steam turbine",
              "correct": false
             }
            ]
           },
           {
            "q": "Given the following types of turbine/generators, which typically has the highest frequency response rate?",
            "a": [
             {
              "text": "Low head hydro-electric",
              "correct": true
             },
             {
              "text": "Coal-fired steam",
              "correct": false
             },
             {
              "text": "Oil-fired steam",
              "correct": false
             },
             {
              "text": "Combustion turbine",
              "correct": false
             }
            ]
           },
           {
            "q": "The high probability of switching surge induced TOVs and the potential for ferroresonance may necessitate operation at reduced steady-state voltage levels during hte early stages of restoration. These reduced steady-state voltage levels are typically in the ________ range.",
            "a": [
             {
              "text": "105% to 110%",
              "correct": false
             },
             {
              "text": "90 to 95%",
              "correct": true
             },
             {
              "text": "70 to 80%",
              "correct": false
             },
             {
              "text": "80 to 90%",
              "correct": false
             }
            ]
           },
           {
            "q": "When a switching surge occurs, the power system is exposed to a wave like effect as the switching surge voltage propagates through the area power system. The propagating surge voltage can add to the power system stead-state voltage, producing a ________.",
            "a": [
             {
              "text": "LOF",
              "correct": false
             },
             {
              "text": "TOV",
              "correct": true
             },
             {
              "text": "AGC",
              "correct": false
             },
             {
              "text": "URAL",
              "correct": false
             }
            ]
           },
           {
            "q": "In the early stages of a power system restoration, 500 MW of genreation is synchronized with 300 MW of spinning reserve available. What is the largest load block that can be restored while still maintaining acceptable frequency control?",
            "a": [
             {
              "text": "150 MW",
              "correct": false
             },
             {
              "text": "10 MW",
              "correct": false
             },
             {
              "text": "25 MW",
              "correct": true
             },
             {
              "text": "50 MW",
              "correct": false
             }
            ]
           },
           {
            "q": "What type of condition(s) is a volts-per-HZ relay most likely to activate for?",
            "a": [
             {
              "text": "Low voltage combined with high frequency",
              "correct": false
             },
             {
              "text": "High voltage",
              "correct": false
             },
             {
              "text": "High voltage combined with low frequency",
              "correct": true
             },
             {
              "text": "Low frequency",
              "correct": false
             }
            ]
           },
           {
            "q": "A(n) ________ occurs when, following a disturbance, pockets of generation and load remain operational but isolated from the remainder of the power system.",
            "a": [
             {
              "text": "interconnected power system",
              "correct": false
             },
             {
              "text": "partial black-out",
              "correct": false
             },
             {
              "text": "islanded power system",
              "correct": true
             },
             {
              "text": "total black-out",
              "correct": false
             }
            ]
           }  
    ]
};
var app = new Vue({
    el: '#app',
    data:data,
    created: function () {
        this.max = this.qlist.length;
    },
    methods: {
        setPage:function(text) {
            this.page=text;
        },
        startQuiz:function() {
            this.page = 'quiz';
            this.correct = this.skipped = this.wrong = 0;
            this.answers = [];
            this.secs = 0;
            resetQused();
            startTimer();
            this.setRandomQuestion();
        },
        setRandomQuestion:function () {
            if(this.qused.length <= 0) {
                this.page = 'results';
                return;
            }
            var q = getRandomIntInclusive(0,this.qused.length-1);
            this.q = this.qused[q];
            this.qused.splice(q,1);
            this.selection = null;
            this.checked = false;
        },
        checkAnswer:function () {
            if(this.selection == null) {return;}
            if(this.qlist[this.q].a[this.selection].correct == true) {
                ++this.correct;
            }
            else {
                ++this.wrong;
            }
            this.checked = true;
        },
        newQuestion:function () {
            this.setRandomQuestion();
        },
        setSelectionFocus:function(i) {
            if(!this.checked) {
                this.selection = i;
            }
        },
        isSelectionFocus:function(i) {
            if (this.selection == i) {
                return true;
            }
            else return false;
        },
        isCorrectAnswerWhileChecked:function(i) {
            if(!this.checked) { return true; }
            if(this.qlist[this.q].a[i].correct == true) {
                return true;
            }
            else return false;
        },
        getButtonVariant:function(bool) {
            if(!this.checked) { return "outline-primary"; }
            if(bool) { return "outline-primary" ; }
            else return "dark";
        },
        skipQuestion:function() {
            this.answers[this.q] = {
                q:this.q,
                result:'skipped',
                _rowVariant:'warning',
            };
            ++this.skipped;
            this.setRandomQuestion();
        },
        nextQuestion:function() {
            //this.answers[this.q] = this.qlist[this.q].a[this.selection].correct;
            if(this.qlist[this.q].a[this.selection].correct) {
                this.answers[this.q] = {
                    q:this.q,
                    result:'correct'
                    //_rowVariant:'info'
                }
            }
            else {
                this.answers[this.q] = {
                    q:this.q,
                    result:'wrong',
                    _rowVariant:'danger'
                }
            }
            this.setRandomQuestion();
        }
    }

});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

var timerVar;
var totalSecs = 0;
function startTimer() {
    totalSecs = 0;
    timerVar = setInterval(updateTimes, 1000);
}
function updateTimes() {
    ++totalSecs;
    data.hours = Math.floor(totalSecs /3600);
    data.mins = Math.floor((totalSecs - data.hours*3600)/60);
    data.secs = totalSecs - (data.hours*3600 + data.mins*60);
}

function resetQused() {
    data.qused = [];
    //fill the questions-used array with sequential numbers representing the questions.
    for(var i = 0; i < data.qlist.length; i++) {
        data.qused[i] = i;
    }
}
