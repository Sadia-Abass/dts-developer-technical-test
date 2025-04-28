import { useEffect, useState } from "react"

export default function Home(){
          const [title, setTitle] = useState("HMCTS")

          useEffect(() => {
                    setTitle("HM Courts and Tribunals Service Task Page")
          })



          return(
                    <div>
                      <h2>Welcome to {title}</h2>
                    </div>
          )
}