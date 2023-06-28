
const url = 'https://jsonplaceholder.typicode.com/users'

export const getContacts = async () => {
    const response = await fetch(url)
  
    return await response.json()
  }

  export const setContact = (contact) =>{
    fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(contact)
        })
  }

  export const deleteContact = (id) =>{
    fetch(url`${id}`, {
            method: 'DELETE',
        })
  }

