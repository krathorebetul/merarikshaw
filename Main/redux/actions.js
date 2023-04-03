
//---------------IMPORTS-----------------------

import firebaseDb from "../../firebase";
import * as types from "./actionTypes";





//--------------LOGIN ACTION DECLARATION------------------------
const get_Login = (Logins) => ({

    type: types.GET_LOGIN,
    payload: Logins

});


const add_Login = () => ({

    type: types.ADD_LOGIN,

});



const delete_Login = () => ({

    type: types.DELETE_LOGIN,

});


const edit_Login = () => ({

    type: types.EDIT_LOGIN,

});




//--------------MEMBEREG ACTION DECLARATION------------------------
const get_Member_Reg = (Member_Reg) => ({

    type: types.GET_MEMBER_REG,
    payload: Member_Reg

});


const add_Member_Reg = () => ({

    type: types.ADD_MEMBER_REG,

});



const delete_Member_Reg = () => ({

    type: types.DELETE_MEMBER_REG,

});


const edit_Member_Reg = () => ({

    type: types.EDIT_MEMBER_REG,

});



// -------- PAYMENT ACTION DECLARATION------------------------
const get_Payment = (payments) => ({

    type: types.GET_PAYMENT,
    payload: payments

});


const add_Payment = () => ({

    type: types.ADD_PAYMENT,

});



const delete_Payment = () => ({

    type: types.DELETE_PAYMENT,

});


const edit_Payment = () => ({

    type: types.EDIT_PAYMENT,

});


//-------------------VEHICLE TYPE-------------------


const get_Vehicle_Type = (Vehicle_Type) => ({

    type: types.GET_VEHICLE_TYPE,
    payload: Vehicle_Type

});


const add_Vehicle_Type = () => ({

    type: types.ADD_VEHICLE_TYPE,

});



const delete_Vehicle_Type = () => ({

    type: types.DELETE_VEHICLE_TYPE,

});


const edit_Vehicle_Type = () => ({

    type: types.EDIT_VEHICLE_TYPE,

});






//-------------------STATE---------------------------


const get_State = (states) => ({

    type: types.GET_STATE,
    payload: states

});


const add_State = () => ({

    type: types.ADD_STATE,

});



const delete_State = () => ({

    type: types.DELETE_STATE,

});


const edit_State = () => ({

    type: types.EDIT_STATE,

});



//-------------------CITY---------------------------


const get_City = (cities) => ({

    type: types.GET_CITY,
    payload: cities

});


const add_City = () => ({

    type: types.ADD_CITY,

});



const delete_City = () => ({

    type: types.DELETE_CITY,

});


const edit_City = () => ({

    type: types.EDIT_CITY,

});


//----------------------AREA----------------------



const get_Area = (areas) => ({

    type: types.GET_AREA,
    payload: areas

});


const add_Area = () => ({

    type: types.ADD_AREA,

});



const delete_Area = () => ({

    type: types.DELETE_AREA,

});


const edit_Area = () => ({

    type: types.EDIT_AREA,

});


//----------------------VEHICLE REGISTRATION---------------



const get_Vehicle = (vehicle) => ({

    type: types.GET_VEHICLE,
    payload: vehicle

});


const add_Vehicle = () => ({

    type: types.ADD_VEHICLE,

});



const delete_Vehicle = () => ({

    type: types.DELETE_VEHICLE,

});


const edit_Vehicle = () => ({

    type: types.EDIT_VEHICLE,

});




//--------------LOGIN-FIREBASE -----------------




export const getLogin = () => {
    return function (dispatch) {
        firebaseDb.ref("login").on("value", (snapshot) => {
            try {
                if (snapshot.val() !== null) {
                    dispatch(get_Login(snapshot.val()));

                } else {
                    dispatch(get_Login({}));
                                   }
            } catch (error) {
                dispatch((error));
            }
        });

    };
};


 
export const addLogin =(Login) => {
    return function(dispatch) {
        firebaseDb.ref("login").push(Login, (err) => {
            dispatch(add_Login());
            if (err) {
                dispatch(err);
              console.log(err);
            }
          });
        
    }

     
}


export const  editLogin =(Login ,id) => {
    return function(dispatch) {
        firebaseDb.ref(`login/${id}`).set(Login, (err) => {
            dispatch(edit_Login());
            if (err) {
                dispatch((err));
              console.log(err);
            }
          });
        
    }

     
}

export const deleteLogin =(id) => {
    return function(dispatch) {
        firebaseDb.ref(`login/${id}`).remove((err) => {
            dispatch(delete_Login)
            if (err) {
              dispatch((err));
            }
          });
    
    }

     
}


//--------------MEMBERREG-FIREBASE -----------------




export const getMemberReg = () => {
    return function (dispatch) {
        firebaseDb.ref("Member_Reg").on("value", (snapshot) => {
            try {
                if (snapshot.val() !== null) {
                    dispatch(get_Member_Reg(snapshot.val()));

                } else {
                    dispatch(get_Member_Reg({}));
                                   }
            } catch (error) {
                dispatch((error));
            }
        });

    };
};


 
export const addMemberReg =(Member_Reg) => {
    return function(dispatch) {
        firebaseDb.ref("Member_Reg").push(Member_Reg, (err) => {
            dispatch(add_Member_Reg());
            if (err) {
                dispatch(err);
              console.log(err);
            }
          });
        
    }

     
}


export const  editMemberReg =(Member_Reg ,id) => {
    return function(dispatch) {
        firebaseDb.ref(`Member_Reg/${id}`).set(Member_Reg, (err) => {
            dispatch(edit_Member_Reg());
            if (err) {
                dispatch((err));
              console.log(err);
            }
          });
        
    }

     
}

export const deleteMemberReg =(id) => {
    return function(dispatch) {
        firebaseDb.ref(`Member_Reg/${id}`).remove((err) => {
            dispatch(delete_Member_Reg)
            if (err) {
              dispatch((err));
            }
          });
    
    }

     
}
//--------------PAYMENT-FIREBASE -----------------




export const getPayment = () => {
    return function (dispatch) {
        firebaseDb.ref("payment").on("value", (snapshot) => {
            try {
                if (snapshot.val() !== null) {
                    dispatch(get_Payment(snapshot.val()));

                } else {
                    dispatch(get_Payment({}));
                                   }
            } catch (error) {
                dispatch((error));
            }
        });

    };
};


 
export const addPayment =(payments) => {
    return function(dispatch) {
        firebaseDb.ref("payment").push(payments, (err) => {
            dispatch(add_Login());
            if (err) {
                dispatch(err);
              console.log(err);
            }
          });
        
    }

     
}


export const  editPayment =(payments ,id) => {
    return function(dispatch) {
        firebaseDb.ref(`payment/${id}`).set(payments, (err) => {
            dispatch(edit_Payment());
            if (err) {
                dispatch((err));
              console.log(err);
            }
          });
        
    }

     
}

export const deletePayment =(id) => {
    return function(dispatch) {
        firebaseDb.ref(`payment/${id}`).remove((err) => {
            dispatch(delete_Payment)
            if (err) {
              dispatch((err));
            }
          });
    
    }

     
}



//-------------------VEHCILE-TYPE---------------


export const getVehicleType = () => {
    return function (dispatch) {
        firebaseDb.ref("vehicle_type").on("value", (snapshot) => {
            try {
                if (snapshot.val() !== null) {
                    dispatch(get_Vehicle_Type(snapshot.val()));

                } else {
                    dispatch(get_Vehicle_Type({}));
                                   }
            } catch (error) {
                dispatch((error));
            }
        });

    };
};


 
export const addVehicleType =(Vehicle_Type) => {
    return function(dispatch) {
        firebaseDb.ref("vehicle_type").push(Vehicle_Type, (err) => {
            dispatch(add_Vehicle_Type());
            if (err) {
                dispatch(err);
              console.log(err);
            }
          });
        
    }

     
}


export const  editVehicleType =(Vehicle_Type ,id) => {
    return function(dispatch) {
        firebaseDb.ref(`vehicle_type/${id}`).set(Vehicle_Type, (err) => {
            dispatch(edit_Vehicle_Type());
            if (err) {
                dispatch((err));
              console.log(err);
            }
          });
        
    }

     
}

export const deleteVehicleType =(id) => {
    return function(dispatch) {
        firebaseDb.ref(`vehicle_type/${id}`).remove((err) => {
            dispatch(delete_Vehicle_Type)
            if (err) {
              dispatch((err));
            }
          });
    
    }

     
}


//-------------------STATE FIREBASE----------------


export const getState = () => {
    return function (dispatch) {
        firebaseDb.ref("state").on("value", (snapshot) => {
            try {
                if (snapshot.val() !== null) {
                    dispatch(get_State(snapshot.val()));

                } else {
                    dispatch(get_State({}));
                                   }
            } catch (error) {
                dispatch((error));
            }
        });

    };
};


 
export const addState =(State) => {
    return function(dispatch) {
        firebaseDb.ref("state").push(State, (err) => {
            dispatch(add_State());
            if (err) {
                dispatch(err);
              console.log(err);
            }
          });
        
    }

     
}


export const  editState =(State ,id) => {
    return function(dispatch) {
        firebaseDb.ref(`state/${id}`).set(State, (err) => {
            dispatch(edit_State());
            if (err) {
                dispatch((err));
              console.log(err);
            }
          });
        
    }

     
}

export const deleteState =(id) => {
    return function(dispatch) {
        firebaseDb.ref(`state/${id}`).remove((err) => {
            dispatch(delete_State)
            if (err) {
              dispatch((err));
            }
          });
    
    }

     
}




//-------------------CITY FIREBASE----------------


export const getCity = () => {
    return function (dispatch) {
        firebaseDb.ref("city").on("value", (snapshot) => {
            try {
                if (snapshot.val() !== null) {
                    dispatch(get_City(snapshot.val()));

                } else {
                    dispatch(get_City({}));
                                   }
            } catch (error) {
                dispatch((error));
            }
        });

    };
};


 
export const addCity =(City) => {
    return function(dispatch) {
        firebaseDb.ref("city").push(City, (err) => {
            dispatch(add_City());
            if (err) {
                dispatch(err);
              console.log(err);
            }
          });
        
    }

     
}


export const  editCity =(City ,id) => {
    return function(dispatch) {
        firebaseDb.ref(`city/${id}`).set(City, (err) => {
            dispatch(edit_City());
            if (err) {
                dispatch((err));
              console.log(err);
            }
          });
        
    }

     
}

export const deleteCity =(id) => {
    return function(dispatch) {
        firebaseDb.ref(`city/${id}`).remove((err) => {
            dispatch(delete_City)
            if (err) {
              dispatch((err));
            }
          });
    
    }

     
}



//-----------AREA---------------------------


export const getArea = () => {
    return function (dispatch) {
        firebaseDb.ref("area").on("value", (snapshot) => {
            try {
                if (snapshot.val() !== null) {
                    dispatch(get_Area(snapshot.val()));

                } else {
                    dispatch(get_Area({}));
                                   }
            } catch (error) {
                dispatch((error));
            }
        });

    };
};


 
export const addArea =(Area) => {
    return function(dispatch) {
        firebaseDb.ref("area").push(Area, (err) => {
            dispatch(add_Area());
            if (err) {
                dispatch(err);
              console.log(err);
            }
          });
        
    }

     
}


export const  editArea =(Area ,id) => {
    return function(dispatch) {
        firebaseDb.ref(`area/${id}`).set(Area, (err) => {
            dispatch(edit_Area());
            if (err) {
                dispatch((err));
              console.log(err);
            }
          });
        
    }

     
}

export const deleteArea =(id) => {
    return function(dispatch) {
        firebaseDb.ref(`area/${id}`).remove((err) => {
            dispatch(delete_Area)
            if (err) {
              dispatch((err));
            }
          });
    
    }

     
}



//----------------------VEHCILE REGISTRATION---------------


export const getVehicle = () => {
    return function (dispatch) {
        firebaseDb.ref("vehicle_reg").on("value", (snapshot) => {
            try {
                if (snapshot.val() !== null) {
                    dispatch(get_Vehicle(snapshot.val()));

                } else {
                    dispatch(get_Vehicle({}));
                                   }
            } catch (error) {
                dispatch((error));
            }
        });

    };
};


 
export const addVehicle =(Vehicle) => {
    return function(dispatch) {
        firebaseDb.ref("vehicle_reg").push(Vehicle, (err) => {
            dispatch(add_Vehicle());
            if (err) {
                dispatch(err);
              console.log(err);
            }
          });
        
    }

     
}


export const  editVehicle =(Vehicle,id) => {
    console.log("ve----------------------",Vehicle);
    return function(dispatch) {
        firebaseDb.ref(`vehicle_reg/${id}`).set(Vehicle, (err) => {
            dispatch(edit_Vehicle());
            if (err) {
                dispatch((err));
              console.log(err);
            }
          });
        
    }

     
}

export const deleteVehicle =(id) => {
    return function(dispatch) {
        firebaseDb.ref(`vehicle_reg/${id}`).remove((err) => {
            dispatch(delete_Vehicle)
            if (err) {
              dispatch((err));
            }
          });
    
    }

     
}




