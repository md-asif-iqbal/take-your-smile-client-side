import React from 'react';

const Teams = () => {
    return (


	<div>

<div className="container mt-36 mx-8">

	<table className="text-left w-full">
		<thead className="bg-black flex text-white w-full">
			<tr className="flex w-full mb-4">
				<th className="p-4 w-1/4">One</th>
				<th className="p-4 w-1/4">Two</th>
				<th className="p-4 w-1/4">Three</th>
				<th className="p-4 w-1/4">Four</th>
			</tr>
		</thead>
		<tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full">
			
          	<tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Dogs</td>
				<td className="p-4 w-1/4">Cats</td>
				<td className="p-4 w-1/4">Birds</td>
				<td className="p-4 w-1/4">Fish</td>
			</tr>
          	<tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Dogs</td>
				<td className="p-4 w-1/4">Cats</td>
				<td className="p-4 w-1/4">Birds</td>
				<td className="p-4 w-1/4">Fish</td>
			</tr>
		</tbody>
	</table>
</div>
	</div>
    );
};

export default Teams;