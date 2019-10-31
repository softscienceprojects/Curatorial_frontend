import React from 'react'


class ExhibitionEditForm extends React.Component {
    state ={
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        biography: ''
    }

    render(){
        return(
            <div>
                Exhibition Edit form
            </div>
        )
    }

}

export default ExhibitionEditForm