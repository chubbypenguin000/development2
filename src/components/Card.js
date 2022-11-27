import React from "react";

const Card = (props) => {
  const { onAdd, onRemove, plant } = props;
  return (
    <div class="flex flex-col items-center bg-white border rounded shadow-md md:flex-row md:max-w-xl dark:border-neutral-700 dark:bg-neutral-800">
      <img
        className="w-60 h-60 object-cover rounded"
        src={props.image}
        alt={props.name}
      />
      <div className="w-60 h-60 flex flex-col space-y-3 p-4 leading-normal">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>

        <p className="font-normal text-neutral-700 dark:text-neutral-400">
          Plant Type: {props.type}
        </p>
        <p className="font-normal text-neutral-700 dark:text-neutral-400">
          Pot Size: {props.pot}''
        </p>
        <p className="font-normal text-neutral-700 dark:text-neutral-400">
          Cost: ${props.cost}
        </p>

        <div className="flex">
          <button
            onClick={() => onAdd(plant)}
            class="mt-2 mr-1 w-1/2 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow"
          >
            add
          </button>
          <button
            onClick={() => onRemove(plant)}
            class="mt-2 w-1/2 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow"
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
