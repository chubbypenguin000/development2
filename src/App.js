import "./App.css";
import Card from "./components/Card";
import Cart from "./components/Cart";
import { plantsData } from "./plants";
import React, { useState, useEffect } from "react";

function App() {
  const originalPlants = plantsData;
  const [plants, setPlants] = useState(originalPlants);
  const [isSorted, setIsSorted] = useState(false);
  const [isCalathea, setIsCalathea] = useState(false);
  const [isCactus, setIsCactus] = useState(false);
  const [isPothos, setIsPothos] = useState(false);

  const [isFour, setIsFour] = useState(false);
  const [isSix, setIsSix] = useState(false);
  const [isEight, setIsEight] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sortedPlants = originalPlants;

    if (isCalathea) {
      sortedPlants = sortedPlants.filter((plant) => plant.type === "calathea");
    }

    if (isCactus) {
      sortedPlants = sortedPlants.filter(
        (plant) => plant.type === "cactus/succulent"
      );
    }

    if (isPothos) {
      sortedPlants = sortedPlants.filter((plant) => plant.type === "pothos");
    }

    if (isFour) {
      sortedPlants = sortedPlants.filter((plant) => plant.pot === "4");
    }

    if (isSix) {
      sortedPlants = sortedPlants.filter((plant) => plant.pot === "6");
    }

    if (isEight) {
      sortedPlants = sortedPlants.filter((plant) => plant.pot === "8");
    }

    if (isSorted) {
      sortedPlants = [...sortedPlants].sort((a, b) => {
        return a.cost > b.cost ? 1 : -1;
      });
    }

    setPlants(sortedPlants);
  }, [isSorted, isCalathea, isCactus, isPothos, isFour, isSix, isEight]);

  const handleReset = () => {
    setCartItems([]);
    setTotal(0);
    document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
    setPlants(originalPlants);
    setIsSorted(false);
    setIsCalathea(false);
    setIsCactus(false);
    setIsPothos(false);
    setIsFour(false);
    setIsSix(false);
    setIsEight(false);
  }

  const handleSort = () => {
    setIsSorted(!isSorted);
  };

  const onAdd = (plant) => {
    const exist = cartItems.find((x) => x.name === plant.name);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.name === plant.name ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...plant, qty: 1 }]);
    }
    const temp = total + plant.cost;
    setTotal(temp);
  };

  const onRemove = (plant) => {
    const exist = cartItems.find((x) => x.name === plant.name);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.name !== plant.name));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.name === plant.name ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    const temp = total - plant.cost;
    setTotal(temp);
  };

  const handleType = (type) => {
    if (type === "calathea") {
      setIsCalathea(!isCalathea);
    } else if (type === "cactus") {
      setIsCactus(!isCactus);
    } else if (type === "pothos") {
      setIsPothos(!isPothos);
    } else if (type === "4") {
      setIsFour(!isFour);
    }  else if (type === "6") {
      setIsSix(!isSix);
    } else if (type === "8") {
      setIsEight(!isEight);
    }
  };

  return (
    <div>
      <h1 className="mt-[70px] mb-8 text-green-900 text-5xl font-bold flex flex-col justify-center items-center">
        plant shop
      </h1>
      <div className="flex">
        <div className="flex flex-wrap m-8 w-9/12">
          {plants.map((plant) => (
            <div className="m-4">
              <Card
                plant={plant}
                name={plant.name}
                image={plant["image-path"]}
                type={plant.type}
                pot={plant.pot}
                cost={plant.cost}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            </div>
          ))}
        </div>
        {/* SORT BY */}
        <div>
          <h2 className="mt-10 text-green-900 text-3xl font-bold flex flex-col">
            sort by:
          </h2>
          <div class="mt-4 flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleSort}
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-neutral-700"
            >
              price (low to high)
            </label>
          </div>

          {/* FILTER BY */}
          {/* plant type */}
          <h2 className="mt-10 text-green-900 text-3xl font-bold flex flex-col">
            filter by:
          </h2>
          <h3 className="mt-2 text-green-900 text-xl font-bold flex flex-col">
            plant type
          </h3>
          <div class="mt-4 flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => handleType("calathea")}
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-neutral-700"
            >
              calathea
            </label>
          </div>

          <div class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => handleType("cactus")}
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-neutral-700"
            >
              cactus/succuluent
            </label>
          </div>

          <div class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => handleType("pothos")}
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-neutral-700"
            >
              pothos
            </label>
          </div>


          {/* pot size */}
          <h3 className="mt-2 text-green-900 text-xl font-bold flex flex-col">
            pot size
          </h3>
          <div class="mt-4 flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => handleType("4")}
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-neutral-700"
            >
              4"
            </label>
          </div>

          <div class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => handleType("6")}
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-neutral-700"
            >
              6"
            </label>
          </div>

          <div class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => handleType("8")}
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-neutral-700"
            >
              8"
            </label>
          </div>

          {/* CART TOTAL */}
          <h2 className="mt-8 mb-2 text-green-900 text-3xl font-bold flex flex-col">
            cart:
          </h2>
          <div>
            <Cart total={total} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
          </div>
          <button onClick={() => handleReset()} class="mt-6 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow">
            reset all
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
