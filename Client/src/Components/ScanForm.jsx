import React from "react"
import SessionModel from "./SessionModel"
import { Image } from "@chakra-ui/react"
import Vector7 from "../assets/Vector7.png"

const DragDrop = () => {
  return (
    <div>
      <SessionModel>
        <button>
          <div
            style={{
              width: "800px",
              marginRight: "40px",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#EFF6FD",
              height: "300px",
              border: "2px dashed #D3D3D3",
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
              <div
                style={{
                  flexDirection: "column",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="bg-[#E5E7EB] p-4 border solid border-[#D3D3D3] rounded-xl ">
                <Image
                  boxSize="50px"
                  objectFit="cover"
                  src={Vector7}
                  alt="Dan Abramov"
                />
</div>
                <div
                  style={{
                    color: "#2870C5",
                    fontWeight: "700",
                    marginTop: "20px",
                  }}
                >
                  Scan and turn into a form
                </div>
              </div>
            </div>
          </div>
        </button>
      </SessionModel>
    </div>
  )
}

export default DragDrop
