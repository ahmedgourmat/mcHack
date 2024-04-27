// SPDX-License-Identifier: MIT 
pragma solidity ^0.5.16;

contract FileStorage {
    struct File {
        string hash;
        address modifiedBy;
        uint256 timestamp;
        bool exists;
    }

    mapping(address => mapping(string => File[])) files;

    event FileModified(string indexed fileName, string indexed fileHash, address indexed modifiedBy, uint256 timestamp);
    event FileDeleted(string indexed fileName, address indexed deletedBy, uint256 timestamp);

    function storeFile(string memory _fileName, string memory _fileHash) public {
        // Check if the file already exists for the user
        require(files[msg.sender][_fileName].length == 0 || !files[msg.sender][_fileName][files[msg.sender][_fileName].length - 1].exists, "File already exists for this user");

        File memory newFile = File({
            hash: _fileHash,
            modifiedBy: msg.sender,
            timestamp: block.timestamp,
            exists: true
        });
        files[msg.sender][_fileName].push(newFile);
        emit FileModified(_fileName, _fileHash, msg.sender, block.timestamp);
    }

    function addFileVersion(string memory _fileName, string memory _fileHash) public {
        require(files[msg.sender][_fileName].length > 0 && files[msg.sender][_fileName][files[msg.sender][_fileName].length - 1].exists, "No existing file to add version to");

        File memory newFileVersion = File({
            hash: _fileHash,
            modifiedBy: msg.sender,
            timestamp: block.timestamp,
            exists: true
        });
        files[msg.sender][_fileName].push(newFileVersion);
        emit FileModified(_fileName, _fileHash, msg.sender, block.timestamp);
    }

    function deleteFile(string memory _fileName) public {
        require(files[msg.sender][_fileName].length > 0, "File does not exist for this user");

        // Mark the latest file as deleted
        files[msg.sender][_fileName][files[msg.sender][_fileName].length - 1].exists = false;
        emit FileDeleted(_fileName, msg.sender, block.timestamp);
    }

    function getFile(string memory _fileName, uint256 index) public view returns (string memory hash, address modifiedBy, uint256 timestamp, bool exists) {
        require(index < files[msg.sender][_fileName].length, "Index out of bounds");
        File memory file = files[msg.sender][_fileName][index];
        return (file.hash, file.modifiedBy, file.timestamp, file.exists);
    }

    function getFileCount(string memory _fileName) public view returns (uint256) {
        return files[msg.sender][_fileName].length;
    }
}
