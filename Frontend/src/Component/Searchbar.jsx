import React from 'react'

function Searchbar() {
  return (
    <div className="mb-4 flex justify-between items-center">
        <input type="text" placeholder="Search by name, number, team, role, HR, type, or status" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="px-4 py-2 border rounded w-4/5" />
        <button onClick={() => setIsAddCandidateModalVisible(true)} className="ml-4 w-1/5 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Add Candidate
        </button>
      </div>
  )
}

export default Searchbar