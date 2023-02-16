import "./scss/Main.scss";
import React, { useState } from "react";

import FileUpload from "./UserYaml/FileUpload";
import FileList from "./UserYaml/FileList";

import PolicyUpload from "./NetworkPolicy/PolicyUpload";
import PolicyList from "./NetworkPolicy/PolicyList";

import UserPostButton from "./UserYaml/UserPostButton";
import PolicyPostButton from "./NetworkPolicy/PolicyPostButton";
import BackToFront from "./Graph/BackToFront";

function Main() {
  //사용자 파일 업로드
  const [ufiles, usetFiles] = useState([]);

  const uremoveFile = (filename) => {
    usetFiles(ufiles.filter((file) => file.name !== filename));
  };

  //네트워크 정책 업로드
  const [pfiles, psetFiles] = useState([]);

  const premoveFile = (filename) => {
    psetFiles(pfiles.filter((file) => file.name !== filename));
  };

  return (
    <div>
      <div className="center-top">
        <div className="BackToFront">
          <BackToFront />
        </div>
        <div>
          <p className="user"></p>
          <FileUpload
            files={ufiles}
            setFiles={usetFiles}
            removeFile={uremoveFile}
          />
          <FileList files={ufiles} removeFile={uremoveFile} />
          <div className="UserPostButton">
            <UserPostButton
              files={ufiles}
              setFiles={usetFiles}
              removeFile={uremoveFile}
            />
          </div>
        </div>

        <div>
          <p className="network_policy"></p>
          <PolicyUpload
            files={pfiles}
            setFiles={psetFiles}
            removeFile={premoveFile}
          />
          <PolicyList files={pfiles} removeFile={premoveFile} />
          <div className="PolicyPostButton">
            <PolicyPostButton
              files={pfiles}
              setFiles={psetFiles}
              removeFile={premoveFile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
