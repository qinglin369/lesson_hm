
import {useState, useEffect } from'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const Search = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useState()
  useEffect(() => {
    // console.log(params);
    console.log('loading.....')
  }, [searchParams])

  const handleSearch = (newQuery: string) => {
    setSearchParams({
      q: newQuery
    })
  }
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-2">
        <Input 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <h1>Search</h1>
    </div>
  )
}

export default Search