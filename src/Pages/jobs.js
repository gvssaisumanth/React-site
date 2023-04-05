import React from "react";
import { job_openings } from "../jobs";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import { Segment, Table, Label, Button } from "semantic-ui-react";

function Jobs() {
  return (
    <div>
      <Header />

      <Segment inverted className="p-5 m-5">
        <div style={{ textAlign: "center" }}>
          {" "}
          <h4>JOB OPENINGS</h4>
        </div>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Role</Table.HeaderCell>
              <Table.HeaderCell>Pay</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {job_openings.map((e) => (
              <Table.Row>
                <Table.Cell>
                  <Label color="green" tag>
                    {e.role}
                  </Label>
                </Table.Cell>
                <Table.Cell>{e.pay}</Table.Cell>
                <Table.Cell>{e.description}</Table.Cell>
                <Table.Cell>
                  <Button>Apply</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>

      <Footer />
    </div>
  );
}

export default Jobs;
