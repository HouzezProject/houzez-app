import axios from "axios";
import axiosClient from "../../utils/axios";

describe("<SignUpInfo />", () =>{
    it ("should post user's input to backend", async ()=>{
        jest.spyOn(axiosClient,"post").mockResolvedValue({status:200} as any);
    });
});