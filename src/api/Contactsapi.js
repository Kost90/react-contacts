
const url = 'https://jsonplaceholder.typicode.com/users'

export const getContacts = async () => {
    const response = await fetch(url)
  
    return await response.json()
  }

  export const addContact = async (contact) =>{
    const response = await fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(contact)
        })
        return await response.json()
  }

  export const deleteContact = async (id) =>{
    const respone = await fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
        return await respone.json()
  }

