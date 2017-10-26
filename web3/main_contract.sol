pragma solidity ^0.4.11;

contract Publisher {
    struct Song { 
        string title;
        string genre; 
        duration uint16; 
        string code;
    }
    address owner;
    bytes32 name;
    Song[] songs;
    function addSong(Song song) {
        songs.push(song);            
    }
}
struct Stream {
    address owner;
    bytes32 name;
    string url;
}
/**
 * @title BlockPartyStorage
 * @dev Storage backend of our song fingerprints.
 */
contract BlockPartyStorage {
    
    mapping(address => Publisher) public publishers;
    mapping(address => Stream) public streams;

    Fingerprint[] public fingerprints;
    
    function storeFingerprint (Fingerprint fingerprint) returns bool {

    }

}