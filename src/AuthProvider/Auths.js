
  
  export const adminrole = email => {
    const currentUser = {
      role: 'admin',
    }
  
    return fetch(`http://localhost:3000/alluser/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    }).then(res => res.json())
  }

  export const Instructorrole = email => {
    const currentUser = {
      role: 'instructor',
    }
  
    return fetch(`http://localhost:3000/alluser/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    }).then(res => res.json())
  }


  export const getRole = async email => {
    const response = await fetch(`http://localhost:3000/alluser/${email}`)
    const user = await response.json()
    return user?.role
  }