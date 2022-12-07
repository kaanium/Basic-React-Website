import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import React, { useState } from 'react';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import { UserData } from './Data';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Page() {
  const handleSelect = (e) => {
    console.log(e);
    setValue(e)
  }
  const [data, setValue] = useState('')
  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Chart
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="BarChart">Bar</Dropdown.Item>
            <Dropdown.Item eventKey="LineChart">Line</Dropdown.Item>
            <Dropdown.Item eventKey="PieChart">Pie</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Tab value={data} />
      </div >
    </div>
  );
}

function Tab(e) {
  const [userData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Net Gain",
      data: UserData.map((data) => data.gain - data.lost),
      borderColor: "black",
      borderWidth: 1,
      backgroundColor: [
        "green",
        "blue",
        "red",
        "yellow",
        "orange",
        "purple",
        "pink"
      ],
    }]
  })
  if (e.value === 'LineChart') {
    return <LineChart chartData={userData} />;
  } else if (e.value === 'PieChart') {
    return <PieChart chartData={userData} />;
  } else {
    return <BarChart chartData={userData} />;
  }
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
