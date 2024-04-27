import React from "react"
import Vector6 from "../assets/Vector6.png"
import { Button, Image } from "@chakra-ui/react"
import SessionModel from "./SessionModel"

const NewSessionButton = () => {
  return (
    <SessionModel>
      <button>
        {" "}
        <div
          style={{
            width: "1200px",
            marginTop: "30px",
            marginRight: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#D3D3D3",
            height: "200px",
            border: "2px dashed #2870C5",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <div
              style={{
                flexDirection: "column",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                boxSize="50px"
                objectFit="cover"
                src={Vector6}
                alt="Dan Abramov"
              />

              <div style={{ color: "#2870C5", fontWeight: "700" }}>
                New session
              </div>
              <div style={{ color: "#A2B5B3" }}>
                Create a session and exchange files
              </div>
            </div>
          </div>
        </div>{" "}
      </button>
    </SessionModel>
  )
}

export default NewSessionButton
