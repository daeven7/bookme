"use client";

import { Breadcrumb, theme, Grid, Card } from "antd";
import { Content } from "antd/es/layout/layout";
import { Col, Divider, Row, Button } from "antd";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";

const Calendar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  //   <Content style={{ padding: '0 48px', border: '.2rem solid' }} className="pt-2.5 mt-2.5 m-12!">

  const style: React.CSSProperties = {
    background: "#0092ff",
    padding: "8px 0",
  };

  const timings = [
    { time: "9:00 AM" },
    { time: "9:15 AM" },
    { time: "9:30 AM" },
    { time: "9:45 AM" },
    { time: "10:00 AM" },
    { time: "10:15 AM" },
    { time: "10:30 AM" },
    { time: "10:45 AM" },
    { time: "11:00 AM" },
    { time: "11:15 AM" },
    { time: "11:30 AM" },
    { time: "11:45 AM" },
    { time: "12:00 PM" },
    { time: "12:15 PM" },
    { time: "12:30 PM" },
    { time: "12:45 PM" },
    { time: "1:00 PM" },
    { time: "1:15 PM" },
    { time: "1:30 PM" },
    { time: "1:45 PM" },
    { time: "2:00 PM" },
    { time: "2:15 PM" },
    { time: "2:30 PM" },
    { time: "2:45 PM" },
    { time: "3:00 PM" },
    { time: "3:15 PM" },
    { time: "3:30 PM" },
    { time: "3:45 PM" },
    { time: "4:00 PM" },
    { time: "4:15 PM" },
    { time: "4:30 PM" },
    { time: "4:45 PM" },
    { time: "5:00 PM" },
    { time: "5:15 PM" },
    { time: "5:30 PM" },
    { time: "5:45 PM" },
    { time: "6:00 PM" },
  ];

  return (
    <>
      {/* <Content className="!mt-4 !m-12 " style={{background: "red"}}>
    
        <div
        className="mt-2.5"
        //   style={{
        //     background: colorBgContainer,
        //     minHeight: 280,
        //     padding: 24,
        //     borderRadius: borderRadiusLG,
        //     border: 2
        //   }}
        >
          Content
        </div>
      </Content> */}
      <Row gutter={8} className="p-4 ">
        <Col className="gutter-row" span={7}>
        <Card style={{ display: "flex", justifyContent: "center" }}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
        obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the 
        word in classical literature, discovered the undoubtable source.
         Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
        
          </Card>
        </Col>
        {/* <Col className="gutter-row" span={10}>
          <div style={style}>col-6</div>
        </Col> */}
        <Col className="gutter-row" span={12}>
          <Card style={{ display: "flex", justifyContent: "center" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <StaticDatePicker
              orientation="portrait"
              disablePast
            /> */}
              <StaticDatePicker />
            </LocalizationProvider>
          </Card>
        </Col>
        <Col className="gutter-row" span={5}>
          {/* <div style={style}>col-6</div> */}
          <Card style={{height: "90vh", boxSizing: "border-box", border:"2px solid", overflowY: 'auto',}} >
            {timings.map((t) => (
              <Button block className="m-1">
                {t.time}
              </Button>
            ))}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Calendar;
