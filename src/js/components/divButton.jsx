import React from "react";

//create your first component
const DivButton = () => {
	return (
			<div className="bg-light w-100 px-5 py-2">
                <p className="sizing1">A Warm Welcome!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos neque quidem debitis corporis ipsum, consequuntur pariatur, nisi vel placeat ut laudantium doloribus totam dicta! Consequatur et sequi impedit ullam modi.</p>
                <button className="bg-primary text-white p-2 rounded border-0 mb-5">Call to action!</button>
			</div>
	);
};

export default DivButton;