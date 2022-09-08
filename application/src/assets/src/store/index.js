import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    faculties: [],
    faculty: null,
    karavans: [],
    karavan: null,
    kombis: [],
    limuzinas: [],
    motors: [],
    karavanInformation: {
      karavanDestination: '', departure: '', arrival: '', price: '', brojVrata: '', cenaPoDanu: '', typeOfAirplane: ''
    },
    kombiInformation: {
      productName: '', departure: '', pricePerKg: '', hazardous: '', deliveryDestination: ''
    },
    limuzinaInformation: {
      nameOfCompany: '', destinationCountry: '', typeOflimuzina: '', premium: '', levelOfCover: ''
    },
    motorInformation: {
      motorName: '', pricePerDay: '', yearOfProduction: '', fuelConsumption: '', cenaPoDanu: '', numberOfmotors: ''
    }
  },

  mutations: {
    setToken(state, token) {
      //console.log(token);
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    setLoggedUserId(state, userId) {
      state.loggedUserId = userId;
    },

    setKaravanInformation(state, karavan) {
      state.karavanInformation.marka = karavan.marka;
      state.karavanInformation.model = karavan.model;
      state.karavanInformation.snaga = karavan.snaga;
      state.karavanInformation.kubikaza = karavan.kubikaza;
      state.karavanInformation.brojVrata = karavan.brojVrata;
      state.karavanInformation.cenaPoDanu = karavan.cenaPoDanu;
    },

    setKombiInformation(state, kombi) {
      state.kombiInformation.marka = kombi.marka;
      state.kombiInformation.model = kombi.model;
      state.kombiInformation.snaga = kombi.snaga;
      state.kombiInformation.kubikaza = kombi.kubikaza;
      state.kombiInformation.brojVrata = kombi.brojVrata;
      state.kombiInformation.cenaPoDanu = kombi.cenaPoDanu;
    },

    setLimuzinaInformation(state, limuzina) {
      state.limuzinaInformation.marka = limuzina.marka;
      state.limuzinaInformation.model = limuzina.model;
      state.limuzinaInformation.snaga = limuzina.snaga;
      state.limuzinaInformation.kubikaza = limuzina.kubikaza;
      state.limuzinaInformation.brojVrata = limuzina.brojVrata;
      state.limuzinaInformation.cenaPoDanu = limuzina.cenaPoDanu;
    },

    setMotorInformation(state, motor) {
      state.motorInformation.marka = motor.marka;
      state.motorInformation.model = motor.model;
      state.motorInformation.snaga = motor.snaga;
      state.motorInformation.kubikaza = motor.kubikaza;
      state.motorInformation.cenaPoDanu = motor.cenaPoDanu;
    },

    setkaravans(state, karavans) {
      state.karavans = karavans;
    },

    setkombi(state, kombis) {
      state.kombis = kombis;
    },

    setlimuzina(state, limuzinas) {
      state.limuzinas = limuzinas;
    },

    setmotor(state, motors) {
      state.motors = motors;
    }
  },

  actions: {
    register({ commit }, obj) {
      console.log(obj)
      fetch('http://localhost:8080/admin/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => {
            console.log(tkn.split(" ")[1]);
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              // console.log(tkn.token)
              commit('setToken', tkn.split(" ")[1])
            }
          });
    },

    login({ commit }, obj) {
      fetch('http://localhost:8080/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => {
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              console.log(tkn.token)
              // console.log(tkn.userId)
              commit('setToken', tkn.split(" ")[1]);
              // commit('setLoggedUserId', tkn.userId);
            }
          });
    },

    fetchkaravans({ commit }){
      fetch('http://localhost:8082/admin/karavan/getAll',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setkaravans', res));
    },

    fetchkombi({ commit }){
      fetch('http://localhost:8082/admin/kombi/getAll',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setkombi', res));
    },

    fetchlimuzina({ commit }){
      fetch('http://localhost:8082/admin/limuzina/getAll',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setlimuzina', res));
    },

    fetchAmotor({ commit }){
      fetch('http://localhost:8082/admin/motor/getAll',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setAmotor', res));
    },


    // socket_updateBook({ commit }, book) {
    //   const bookNew = JSON.parse(book);
    //   console.log("nadajmo se knjiga")
    //   // console.log(bookNew)
    //   commit('setSelectedBook', bookNew);
    // }


  }

})
