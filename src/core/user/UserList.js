import React, { Fragment, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import Card from '../../assets/card/Card'
import Grid from '../../assets/grid/Grid'
import Search from '../../assets/search/Search'
import UserEdit from './UserEdit'


const userListUrl = 'https://reqres.in/api/users'
export default function UserList(){

    const [ userResponse, setUserResponse ] = useState()
    const [ search, setSearch ] = useState('')
    const [ isAdding, setIsAdding ] = useState(false)
    const [ newUserList, setNewUserList ] = useState([])

    async function getData(){
      try{
        const response = await axios.get(userListUrl)
        //console.log(response)
        setUserResponse(response)
      }
      catch(e){
          alert("Error fetching users!")
      }
    }
  
    useEffect(() => {
        getData()
    }, [])
  

    const isLoading = !userResponse
    const hasErrors = userResponse && userResponse.status !== 200
    const tempUserList = !isLoading && !hasErrors ? userResponse.data.data : []
    const finalUserList = [ ...tempUserList, ...newUserList ]
    const userList = search.length >= 2 ? finalUserList.filter(user => {
        return `${user.first_name} ${user.last_name}`.toLowerCase().indexOf(search) >= 0
    }) : finalUserList
    
    return <>
        {isLoading && <>LOADING... PLEASE WAIT</>}
        {hasErrors && <>ERROR</>}
        {isAdding && 
            <UserEdit
                onCancel={() => setIsAdding(false)}
                onSave={(data) => {
                    setIsAdding(false)
                    setNewUserList([ ...newUserList, data ])
                }}
            />
        }
        <div className='bar'>
            <button
                class='button'
                onClick={() => setIsAdding(true)}
                children='Add new user'
            />
            &nbsp;
            {!isLoading && <>
                <Search
                    value={search}
                    onChange={setSearch}
                />
            </>}
        </div>
        {userList.length > 0 ? <>
            <Grid>
                {userList.map((user, index) => 
                    <Card
                        key={index}
                        avatar={user.avatar}
                        title={`${user.first_name} ${user.last_name}`}
                        subtitle={user.email}
                    />
                )}
            </Grid>
        </> : <>
            No matching results
        </>}
    </>
}