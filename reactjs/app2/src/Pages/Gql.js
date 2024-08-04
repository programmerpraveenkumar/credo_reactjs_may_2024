import { gql, useLazyQuery } from "@apollo/client";

const query = gql`
  query{
    hello
    currentDate
    queryUsers{
      firstName,email,lastName
    }
  }
`;
function GQL() {

  const [getDate, { called, loading, data }] = useLazyQuery(query);
  
    return(
      <>
       <h1>Hello {data?.currentDate}!</h1>
      <button onClick={() => getDate()}>Get Date</button>
      {
        data && data.queryUsers.map((obj)=>{
          return(
            <div>{obj.firstName}</div>
          )
        })
      }
      </>
    ) 
  
}