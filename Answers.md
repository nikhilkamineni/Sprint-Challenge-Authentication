<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    * _Middleware_ is software that 'glues' different functionality in an app that would otherwise not be able to interface with each other.
    * _Sessions_ are a way of handling authentication on the server-side. The server keeps track if a user is logged in and is also reponsible for logging them out.
    * _bcrypt_ is a password hashing function used to encrypt passwords before storing them on the DB.
    * _JWT_ or 'JSON Web Tokens' is an access token used to handle authentication. It is typically sent by the server and stored on the client's `localStorage`.

2.  What does bcrypt do in order to prevent attacks?
  It is a one-way function and uses 'salt' to increase the complexity of the hashing function to guard against rainbow table attacks.

3.  What are the three parts of the JSON Web Token?
    * _Header_: Specifies the type of token (JWT), and the hashing algorithm (e.g 'HS256').
    * _Payload_: Contains the 'claims' (information about the user) and other metadata.
    * _Signature_: Created from the encoded header, the encoded payload, a secret, the algorithm specified in the header. Used to verify the information wasn't changed.
