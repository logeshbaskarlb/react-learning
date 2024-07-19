import { useEffect, useState } from "react";

const SearchInput = () => {
    const data = [
        'Alice',
        'Bob',
        'Charlie',
        'David',
        'Eve',
        'Frank',
        'Grace',
        'Hannah',
        'Isaac',
        'Jack',
    ];

    const [searchQuery, setSearchQuery] = useState("")
    const [filteredData, setFilteredData] = useState(data);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setFilteredData(
                data.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
            )
        },300) // Debouce delay
        return () => clearTimeout(timer)
    },[searchQuery,data])

  return (
    <div>
        <input type="text" 
        placeholder="Type ..."
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)} 
        />
        <ul>
            {
                filteredData?.length > 0 ? (
                    filteredData.map((item, index)=>(
                        <li key={index}>
                            {item}
                        </li>
                    ))
                ) : (
                    <li>No results found</li>
                )
            }
        </ul>
    </div>
  )
}

export default SearchInput
