import React, { useState } from 'react';
import './visual.css';

const Visual = () => {
  const [formData, setFormData] = useState({
    machine: '',
    component: '',
    value: '',
    parameters: [{ parameter: '', value: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleParameterChange = (index, e) => {
    const { name, value } = e.target;
    const updatedParameters = [...formData.parameters];
    updatedParameters[index] = { ...updatedParameters[index], [name]: value };
    setFormData({ ...formData, parameters: updatedParameters });
  };

  const addParameter = () => {
    setFormData({
      ...formData,
      parameters: [...formData.parameters, { parameter: '', value: '' }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
        <div class="flex">
            <div>
                <form onSubmit={handleSubmit}>
                <label>
                    Machine:
                    <select name="machine" value={formData.machine} onChange={handleChange}>
                    <option value="">Select Machine</option>
                    <option value="Articulated_Truck_1">Articulated_Truck_1</option>
                    <option value="Asphalt_Paver_1">Asphalt_Paver_1</option>
                    <option value="Backhoe_Loader_1">Backhoe_Loader_1</option>
                    <option value="Excavator_1">Excavator_1</option>
                    <option value="Dozer_1">Dozer_1</option>
                    </select>
                </label>
                <br />
                <label>
                    Component:
                    <select
                    name="component"
                    value={formData.component}
                    onChange={handleChange}
                    >
                    <option value="">Select Component</option>
                    <option value="Drive">Drive</option>
                    <option value="Engine">Engine</option>
                    <option value="Fuel">Fuel</option>
                    <option value="Misc">Misc</option>
                    </select>
                </label>
                <br />
                {formData.parameters.map((param, index) => (
                    <div key={index}>
                    <label>
                        Parameter:
                        <select
                        name="parameter"
                        value={param.parameter}
                        onChange={(e) => handleParameterChange(index, e)}
                        >
                        <option value="">Select Parameter</option>
                        <option value="Air Filter Pressure">Air Filter Pressure</option>
                        <option value="Brake Control">Brake Control</option>
                        <option value="Exhaust Gas Temperature">Exhaust Gas Temperature</option>
                        <option value="Hydraulic Pump Rate">Hydraulic Pump Rate</option>
                        <option value="Level">Level</option>
                        <option value="Oil Pressure">Oil Pressure</option>
                        <option value="Pedal Sensor">Pedal Sensor</option>
                        <option value="Pressure">Pressure</option>
                        <option value="Speed">Speed</option>
                        <option value="System Voltage">System Voltage</option>
                        <option value="Temperature">Temperature</option>
                        <option value="Water in Fuel">Water in Fuel</option>
                        <option value="Transmission Pressure">Transmission Pressure</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Value:
                        <input
                        type="number"
                        name="value"
                        step="0.01"
                        value={param.value}
                        onChange={(e) => handleParameterChange(index, e)}
                        />
                    </label>
                    <br />
                    </div>
                ))}
                <button type="button" onClick={addParameter}>Add More Parameters</button>
                <br />
                <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <h1>Here result and visualisation will come</h1>
            </div>
        </div>
    </div>
  );
};

export default Visual;
