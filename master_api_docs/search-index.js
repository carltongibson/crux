var searchIndex = JSON.parse('{\
"crux_core":{"doc":"Cross-platform app development in Rust","t":[8,16,2,3,16,16,3,3,3,16,2,11,11,11,11,11,11,11,11,0,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,12,10,11,8,3,16,8,16,16,8,11,11,11,11,11,11,10,11,10,11,11,11,11,11,11,11,11,11,11,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,3,3,11,11,11,11,11,11,11,11,11,12,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["App","Capabilities","Capability","Core","Event","Model","Request","ShellRequest","ShellStream","ViewModel","WithContext","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","capability","default","deserialize","effect","fmt","from","from","from","from","handle_response","into","into","into","into","into_future","new","poll","poll_next","process_event","render","serialize","testing","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_poll","try_poll_next","type_id","type_id","type_id","type_id","update","uuid","view","view","Capability","CapabilityContext","MappedSelf","Operation","Operation","Output","WithContext","borrow","borrow_mut","clone","clone_into","from","into","map_event","map_event","new_with_context","notify_shell","request_from_shell","spawn","stream_from_shell","to_owned","try_from","try_into","type_id","update_app","with_effect","Render","RenderOperation","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","deserialize","eq","fmt","from","from","into","into","map_event","new","render","serialize","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","AppTester","TestEffect","Update","as_ref","as_ref","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","default","effects","eq","events","fmt","fmt","from","from","from","into","into","into","resolve","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","update","view"],"q":["crux_core","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","crux_core::capability","","","","","","","","","","","","","","","","","","","","","","","","","","crux_core::render","","","","","","","","","","","","","","","","","","","","","","","","","","crux_core::testing","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Implement App on your type to make it into a Crux app. Use …","Capabilities, typically a <code>struct</code>, lists the capabilities …","","The Crux core. Create an instance of this type with your …","Event, typically an <code>enum</code>, defines the actions that can be …","Model, typically a <code>struct</code> defines the internal state of …","Request for a side-effect passed from the Core to the …","","","ViewModel, typically a <code>struct</code> describes the user interface …","","","","","","","","","","Capabilities provide a user-friendly API to request …","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Receive a response to a capability request from the shell.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Create an instance of the Crux core to start a Crux …","","","Receive an event from the shell.","Built-in capability used to notify the Shell that a UI …","","Testing support for unit testing Crux apps.","","","","","","","","","","","","","","","Update method defines the transition from one <code>model</code> state …","","View method is used by the Shell to request the current …","Get the current state of the app’s view model …","Implement <code>Capability</code> for your capability. This will allow …","An interface for capabilities to interact with the app and …","","Operation trait links together input and output of a …","","<code>Output</code> assigns the type this request results in.","Allows Crux to construct app’s set of required …","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","Transform the CapabilityContext into one which uses the …","","Send an effect request to the shell in a fire and forget …","Send an effect request to the shell, expecting an output. …","Spawn a task to do the asynchronous work. Within the task, …","Send an effect request to the shell, expecting a stream of …","","","","","Send an event to the app. The event will be processed on …","Construct a CapabilityContext with a specific effect …","Use an instance of <code>Render</code> to notify the Shell that it …","The single operation <code>Render</code> implements.","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Call <code>render</code> from <code>App::update</code> to signal to the Shell that …","","","","","","","","","AppTester is a simplified execution environment for Crux …","","Update test helper holds the result of running an app …","","","","","","","","","","Effects requested from the update run","","Events dispatched from the update run","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","Run the app’s <code>update</code> function with an event and a model …","Run the app’s <code>view</code> function with a model state"],"i":[0,25,0,0,25,25,0,0,0,25,0,9,13,1,2,9,13,1,2,0,1,2,2,2,9,13,1,2,1,9,13,1,2,9,1,9,13,1,0,2,0,9,13,1,2,9,13,1,2,9,13,9,13,1,2,25,2,25,1,0,0,26,0,26,27,0,16,16,16,16,16,16,26,16,28,16,16,16,16,16,16,16,16,16,16,0,0,21,19,21,19,19,19,19,19,19,21,19,21,19,21,21,21,19,19,21,19,21,19,21,19,0,0,0,22,23,22,23,24,22,23,24,22,24,23,24,23,24,22,23,24,22,23,24,23,22,23,24,22,23,24,22,23,24,22,22],"f":[0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,[[],1],[[],[[3,[2]]]],0,[[[2,[4]],5],6],[[]],[[]],[[]],[[]],[1,[[8,[7]]]],[[]],[[]],[[]],[[]],[[]],[[],1],[[[10,[9]],11],12],[[[10,[13]],11],[[12,[14]]]],[1,[[8,[7]]]],0,[2,3],0,[[],3],[[],3],[[],3],[[],3],[[],3],[[],3],[[],3],[[],3],[[10,11],12],[[10,11],[[12,[[14,[3]]]]]],[[],15],[[],15],[[],15],[[],15],[[]],0,[[]],[1,[[8,[7]]]],0,0,0,0,0,0,0,[[]],[[]],[16,16],[[]],[[]],[[]],[[]],[16,16],[16],[16],[16,9],[[16,[0,[17,18]]]],[16,13],[[]],[[],3],[[],3],[[],15],[16],[16,16],0,0,[[]],[[]],[[]],[[]],[19,19],[[]],[[],[[3,[19]]]],[[19,19],20],[[19,5],6],[[]],[[]],[[]],[[]],[21],[[[16,[19]]],21],[21],[19,3],[[]],[[],3],[[],3],[[],3],[[],3],[[],15],[[],15],0,0,0,[22],[23],[[]],[[]],[[]],[[]],[[]],[[]],[[],22],0,[23,20],0,[[23,5],6],[[[24,[4,4]],5],6],[[]],[[]],[[]],[[]],[[]],[[]],[23,24],[[],3],[[],3],[[],3],[[],3],[[],3],[[],3],[[],15],[[],15],[[],15],[22,24],[22]],"p":[[3,"Core"],[3,"Request"],[4,"Result"],[8,"Debug"],[3,"Formatter"],[6,"Result"],[15,"u8"],[3,"Vec"],[3,"ShellRequest"],[3,"Pin"],[3,"Context"],[4,"Poll"],[3,"ShellStream"],[4,"Option"],[3,"TypeId"],[3,"CapabilityContext"],[8,"Future"],[8,"Send"],[3,"RenderOperation"],[15,"bool"],[3,"Render"],[3,"AppTester"],[3,"TestEffect"],[3,"Update"],[8,"App"],[8,"Capability"],[8,"Operation"],[8,"WithContext"]]},\
"crux_http":{"doc":"A HTTP client for use with Crux","t":[3,3,3,3,3,3,3,6,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,2,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,8,3,3,11,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,3,3,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,12,12,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,11,3,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Config","Error","Http","Request","RequestBuilder","Response","ResponseAsync","Result","add_header","append_header","append_header","append_header","as_mut","as_mut","as_mut","as_mut","as_mut","as_ref","as_ref","as_ref","as_ref","as_ref","base_url","body","body","body_bytes","body_bytes","body_bytes","body_bytes","body_file","body_form","body_form","body_json","body_json","body_json","body_json","body_string","body_string","body_string","body_string","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","build","client","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","connect","content_type","content_type","content_type","content_type","default","delete","deserialize","deserialize","eq","eq","expect_json","expect_string","ext","ext","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","get","head","header","header","header","header","header_mut","header_mut","header_mut","header_names","header_names","header_names","header_values","header_values","header_values","headers","http","index","index","index","index","index","index","insert_ext","insert_header","insert_header","insert_header","into","into","into","into","into","into","into","into","into","into_future","into_iter","into_iter","into_iter","is_empty","is_empty","iter","iter","iter","iter_mut","iter_mut","iter_mut","len","len","map_event","method","middleware","middleware","middleware","new","new","new","new","options","patch","poll_read","post","protocol","put","query","query","remove_header","remove_header","remove_header","request","send","serialize","serialize","set_base_url","set_body","set_body","set_content_type","set_ext","set_header","set_query","status","status","swap_body","take_body","take_body","take_body","testing","to_owned","to_owned","to_owned","to_owned","to_owned","trace","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","url","version","version","vzip","vzip","vzip","vzip","vzip","vzip","vzip","with_body","Client","borrow","borrow_mut","clone","clone_into","config","connect","delete","fmt","from","get","head","into","options","patch","post","put","recv_bytes","recv_form","recv_json","recv_string","request","send","to_owned","trace","try_from","try_into","type_id","vzip","Middleware","Next","Redirect","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","default","fmt","from","from","handle","handle","into","into","new","new","run","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip","HttpHeader","HttpRequest","HttpResponse","body","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","deserialize","deserialize","deserialize","eq","eq","fmt","fmt","from","from","from","from","headers","into","into","into","method","name","serialize","serialize","serialize","status","to_owned","to_owned","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","url","value","vzip","vzip","vzip","ResponseBuilder","body","borrow","borrow_mut","build","from","header","into","ok","try_from","try_into","type_id","vzip"],"q":["crux_http","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","crux_http::client","","","","","","","","","","","","","","","","","","","","","","","","","","","","","crux_http::middleware","","","","","","","","","","","","","","","","","","","","","","","","","","","","","crux_http::protocol","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","crux_http::testing","","","","","","","","","","","",""],"d":["Configuration for <code>crux_http::Http</code>s and their underlying …","","The Http capability API.","An HTTP request, returns a <code>Response</code>.","Request Builder","An HTTP Response that will be passed to in a message to an …","An HTTP response that exposes async methods, for use …","","Adds a header to be added to every request by this config.","Append a header to the headers.","Append an HTTP header.","Append an HTTP header.","","","","","","","","","","","The base URL for a client. All request URLs will be …","Sets the body of the request from any type with implements …","","Pass bytes as the request body.","Pass bytes as the request body.","Reads the entire request body into a byte buffer.","Reads the entire request body into a byte buffer.","Pass a file as the request body.","Pass a form as the request body.","Reads and deserialized the entire request body from form …","Pass JSON as the request body.","Pass JSON as the request body.","Reads and deserialized the entire request body from json.","Reads and deserialized the entire request body from json.","Pass a string as the request body.","Pass a string as the request body.","Reads the entire response body into a string.","Reads the entire response body into a string.","","","","","","","","","","","","","","","Return the constructed <code>Request</code>.","","","","","","","","","","","","Instruct the Shell to perform a HTTP CONNECT request to …","Sets the Content-Type header on the request.","Get the request content type as a <code>Mime</code>.","Get the response content type as a <code>Mime</code>.","Get the response content type as a <code>Mime</code>.","","Instruct the Shell to perform a HTTP DELETE request to the …","","","","","Decode a <code>T</code> from a JSON response body prior to dispatching …","Decode a String from the response body prior to …","Get a request extension value.","Get a response scoped extension value.","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","","","Converts an <code>http::Request</code> to a <code>crux_http::Request</code>.","Returns the argument unchanged.","Returns the argument unchanged.","","","Returns the argument unchanged.","Instruct the Shell to perform a HTTP GET request to the …","Instruct the Shell to perform a HTTP HEAD request to the …","Sets a header on the request.","Get an HTTP header.","Get a header.","Get a header.","Get a mutable reference to a header.","Get an HTTP header mutably.","Get an HTTP header mutably.","An iterator visiting all header names in arbitrary order.","An iterator visiting all header names in arbitrary order.","An iterator visiting all header names in arbitrary order.","An iterator visiting all header values in arbitrary order.","An iterator visiting all header values in arbitrary order.","An iterator visiting all header values in arbitrary order.","Headers to be applied to every request made by this client.","","Returns a reference to the value corresponding to the …","Returns a reference to the value corresponding to the …","Returns a reference to the value corresponding to the …","Returns a reference to the value corresponding to the …","Returns a reference to the value corresponding to the …","Returns a reference to the value corresponding to the …","Set a response scoped extension value.","Set an HTTP header.","Insert an HTTP header.","Insert an HTTP header.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Converts a <code>crux_http::Request</code> to an <code>http::Request</code>.","Calls <code>U::from(self)</code>.","","Calls <code>U::from(self)</code>.","","","","Returns a iterator of references over the remaining items.","Returns <code>true</code> if the set length of the body stream is zero, …","Returns <code>true</code> if the set length of the body stream is zero, …","An iterator visiting all header pairs in arbitrary order.","An iterator visiting all header pairs in arbitrary order.","An iterator visiting all header pairs in arbitrary order.","An iterator visiting all header pairs in arbitrary order, …","An iterator visiting all header pairs in arbitrary order, …","An iterator visiting all header pairs in arbitrary order, …","Get the length of the body stream, if it has been set.","Get the length of the body stream, if it has been set.","","Get the request HTTP method.","Middleware types","Push middleware onto a per-request middleware stack.","Push middleware onto a per-request middleware stack.","","Construct new empty config.","","Create a new instance.","Instruct the Shell to perform a HTTP OPTIONS request to …","Instruct the Shell to perform a HTTP PATCH request to the …","","Instruct the Shell to perform a HTTP POST request to the …","The protocol for communicating with the shell","Instruct the Shell to perform a HTTP PUT request to the …","Set the URL querystring.","Get the URL querystring.","Remove a header.","Remove a header.","Remove a header.","Instruct the Shell to perform an HTTP request with the …","Sends the constructed <code>Request</code> and returns its result as an …","","","Sets the base URL for this config. All request URLs will …","Pass an <code>AsyncRead</code> stream as the request body.","Set the body reader.","Set the request content type from a <code>Mime</code>.","Set a request extension value.","Set an HTTP header.","Set the URL querystring.","Get the HTTP status code.","Get the HTTP status code.","Swaps the value of the body with another body, without …","Take the request body as a <code>Body</code>.","","Take the response body as a <code>Body</code>.","","","","","","","Instruct the Shell to perform a HTTP TRACE request to the …","","","","","","","","","","","","","","","","","","","","","","Get the request url.","Get the HTTP protocol version.","Get the HTTP protocol version.","","","","","","","","","An HTTP client, capable of sending <code>Request</code>s","","","Clones the Client.","","Get the current configuration.","Perform an HTTP <code>CONNECT</code> request using the <code>Client</code> …","Perform an HTTP <code>DELETE</code> request using the <code>Client</code> connection.","","Returns the argument unchanged.","Perform an HTTP <code>GET</code> request using the <code>Client</code> connection.","Perform an HTTP <code>HEAD</code> request using the <code>Client</code> connection.","Calls <code>U::from(self)</code>.","Perform an HTTP <code>OPTIONS</code> request using the <code>Client</code> …","Perform an HTTP <code>PATCH</code> request using the <code>Client</code> connection.","Perform an HTTP <code>POST</code> request using the <code>Client</code> connection.","Perform an HTTP <code>PUT</code> request using the <code>Client</code> connection.","Submit a <code>Request</code> and get the response body as bytes.","Submit a <code>Request</code> and decode the response body from form …","Submit a <code>Request</code> and decode the response body from json …","Submit a <code>Request</code> and get the response body as a string.","Perform a HTTP request with the given verb using the <code>Client</code>…","Send a <code>Request</code> using this client.","","Perform an HTTP <code>TRACE</code> request using the <code>Client</code> connection.","","","","","Middleware that wraps around remaining middleware chain.","The remainder of a middleware chain, including the …","A middleware which attempts to follow HTTP redirects.","","","","","","","Create a new instance of the Redirect middleware, which …","","Returns the argument unchanged.","Returns the argument unchanged.","Asynchronously handle the request, and return a response.","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Create a new instance","Create a new instance of the Redirect middleware, which …","Asynchronously execute the remaining middleware chain.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","Allows users to build an http response.","Sets the body of the Response","","","Builds the response","Returns the argument unchanged.","Sets a header on the response.","Calls <code>U::from(self)</code>.","Constructs a new ResponseBuilder with the 200 OK status …","","","",""],"i":[0,0,0,0,0,0,0,0,1,6,7,8,6,6,7,8,8,6,6,7,8,8,1,12,7,12,6,7,8,6,6,8,12,6,7,8,12,6,7,8,12,22,1,23,6,7,8,12,22,1,23,6,7,8,12,0,22,1,23,6,7,22,1,23,6,7,22,12,6,7,8,1,22,23,7,23,7,12,12,6,8,12,1,23,6,7,8,12,22,1,23,23,23,23,6,6,7,8,8,8,22,22,12,6,7,8,6,7,8,6,7,8,6,7,8,1,0,6,6,7,7,8,8,8,6,7,8,12,22,1,23,6,6,7,8,8,12,6,6,6,6,8,6,7,8,6,7,8,6,8,22,6,0,12,6,22,1,23,6,22,22,8,22,0,22,12,6,6,7,8,22,12,23,7,1,6,8,6,6,6,6,7,8,8,6,7,8,0,22,1,23,6,7,22,12,22,1,23,6,7,8,12,22,1,23,6,7,8,12,22,1,23,6,7,8,6,7,8,12,22,1,23,6,7,8,7,0,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,0,0,0,56,57,56,57,56,56,57,57,56,57,44,57,56,57,56,57,56,56,56,57,56,57,56,57,56,57,0,0,0,34,62,45,34,62,45,34,62,45,62,45,62,45,34,62,45,62,45,62,45,45,34,45,62,45,34,45,62,62,45,34,34,62,45,62,45,34,62,45,34,62,45,34,45,62,62,45,34,0,63,63,63,63,63,63,63,63,63,63,63,63],"f":[0,0,0,0,0,0,0,0,[[1,[3,[2]],4],[[5,[1]]]],[[6,[3,[2]],4]],[[7,[3,[2]],4]],[[8,[3,[2]],4]],[6,9],[6,10],[7,10],[8,11],[8,10],[6,9],[6,10],[7,10],[8,11],[8,10],0,[[12,[3,[13]]],12],[7,14],[[12,15],12],[[6,15]],[[[7,[[17,[16]]]]],[[5,[[17,[16]]]]]],[8,[[5,[[17,[16]]]]]],[[6,[15,[18]]],19],[6,5],[8,[[5,[20]]]],[12,[[5,[12]]]],[6,5],[[[7,[[17,[16]]]]],[[5,[20]]]],[8,[[5,[20]]]],[[12,21],12],[[6,21]],[[[7,[[17,[16]]]]],[[5,[21]]]],[8,[[5,[21]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[12,6],0,[22,22],[1,1],[23,23],[6,6],[[[7,[24]]],[[7,[24]]]],[[]],[[]],[[]],[[]],[[]],[[22,[15,[25]]],12],[[12,[3,[26]]],12],[6,[[14,[26]]]],[7,[[14,[26]]]],[8,[[14,[26]]]],[[],1],[[22,[15,[25]]],12],[[],[[27,[23]]]],[[],[[27,[7]]]],[[23,23],28],[[7,7],28],[12,12],[12,[[12,[21]]]],[6,14],[8,14],[[12,29],30],[[1,29],30],[[23,29],30],[[6,29],30],[[7,29],30],[[8,29],30],[[]],[[]],[[]],[31,23],[[]],[32,23],[33,23],[9,6],[[]],[[]],[11,8],[34,8],[[]],[[22,[15,[25]]],12],[[22,[15,[25]]],12],[[12,[3,[2]],4],12],[[6,[3,[2]]],[[14,[35]]]],[[7,[3,[2]]],[[14,[35]]]],[[8,[3,[2]]],[[14,[35]]]],[[6,[3,[2]]],[[14,[35]]]],[[7,[3,[2]]],[[14,[35]]]],[[8,[3,[2]]],[[14,[35]]]],[6,36],[7,36],[8,36],[6,37],[7,37],[8,37],0,0,[[6,25],35],[[6,2],35],[[7,2],35],[[7,25],35],[[8,25],35],[[8,2],35],[[8,[0,[38,39]]]],[[6,[3,[2]],4],[[14,[35]]]],[[7,[3,[2]],4]],[[8,[3,[2]],4]],[[]],[[]],[[]],[[]],[[]],[6,9],[[]],[8,11],[[]],[12],[6],[6],[6],[6,[[14,[28]]]],[8,[[14,[28]]]],[6,40],[7,40],[8,40],[6,41],[7,41],[8,41],[6,[[14,[42]]]],[8,[[14,[42]]]],[22],[6,43],0,[[12,44],12],[[6,44]],[[[46,[45]]],22],[[],1],[[[14,[47]],[3,[21]]],23],[[43,48],6],[[22,[15,[25]]],12],[[22,[15,[25]]],12],[[[49,[8]],50],[[52,[[27,[42,51]]]]]],[[22,[15,[25]]],12],0,[[22,[15,[25]]],12],[12,[[27,[12,23]]]],[6,[[5,[20]]]],[[6,[3,[2]]],[[14,[35]]]],[[7,[3,[2]]],[[14,[35]]]],[[8,[3,[2]]],[[14,[35]]]],[[22,43,48],12],[12],[23,27],[7,27],[[1,48],1],[[6,[3,[13]]]],[[8,[3,[13]]]],[[6,26]],[[6,[0,[38,39]]],[[14,[[0,[38,39]]]]]],[[6,[3,[2]],4]],[6,5],[7,47],[8,47],[[8,13]],[6,13],[7,14],[8,13],0,[[]],[[]],[[]],[[]],[[]],[[22,[15,[25]]],12],[[],27],[[],27],[[],27],[[],27],[[],27],[[],27],[[],27],[[],27],[[],27],[[],27],[[],27],[[],27],[[],27],[[],27],[[],53],[[],53],[[],53],[[],53],[[],53],[[],53],[[],53],[6,48],[7,[[14,[54]]]],[8,[[14,[54]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[7,7],0,[[]],[[]],[55,55],[[]],[55,1],[[55,[15,[25]]],12],[[55,[15,[25]]],12],[[55,29],30],[[]],[[55,[15,[25]]],12],[[55,[15,[25]]],12],[[]],[[55,[15,[25]]],12],[[55,[15,[25]]],12],[[55,[15,[25]]],12],[[55,[15,[25]]],12],[[55,[3,[6]]],[[5,[[17,[16]]]]]],[[55,[3,[6]]],[[5,[20]]]],[[55,[3,[6]]],[[5,[20]]]],[[55,[3,[6]]],[[5,[21]]]],[[55,43,[15,[25]]],12],[[55,[3,[6]]],[[5,[8]]]],[[]],[[55,[15,[25]]],12],[[],27],[[],27],[[],53],[[]],0,0,0,[[]],[[]],[[]],[[]],[56,56],[[]],[[],57],[[57,29],30],[[]],[[]],[[6,55,56],[[49,[[59,[58]]]]]],[[57,6,55,56],[[49,[[59,[58]]]]]],[[]],[[]],[60,56],[16,57],[[56,6,55],[[61,[[5,[8]]]]]],[[]],[[],27],[[],27],[[],27],[[],27],[[],53],[[],53],[[]],[[]],0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[62,62],[45,45],[[]],[[]],[[],[[27,[62]]]],[[],[[27,[45]]]],[[],[[27,[34]]]],[[62,62],28],[[45,45],28],[[62,29],30],[[45,29],30],[[]],[6,45],[[]],[[]],0,[[]],[[]],[[]],0,0,[62,27],[45,27],[34,27],0,[[]],[[]],[[],27],[[],27],[[],27],[[],27],[[],27],[[],27],[[],53],[[],53],[[],53],0,0,[[]],[[]],[[]],0,[63,63],[[]],[[]],[63,7],[[]],[[63,[3,[2]],4],63],[[]],[[],[[63,[[17,[16]]]]]],[[],27],[[],27],[[],53],[[]]],"p":[[3,"Config"],[3,"HeaderName"],[8,"Into"],[8,"ToHeaderValues"],[6,"Result"],[3,"Request"],[3,"Response"],[3,"ResponseAsync"],[3,"Request"],[3,"Headers"],[3,"Response"],[3,"RequestBuilder"],[3,"Body"],[4,"Option"],[8,"AsRef"],[15,"u8"],[3,"Vec"],[3,"Path"],[6,"Result"],[8,"DeserializeOwned"],[3,"String"],[3,"Http"],[3,"Error"],[8,"Clone"],[15,"str"],[3,"Mime"],[4,"Result"],[15,"bool"],[3,"Formatter"],[6,"Result"],[3,"Error"],[4,"ParseError"],[3,"Error"],[3,"HttpResponse"],[3,"HeaderValues"],[3,"Names"],[3,"Values"],[8,"Send"],[8,"Sync"],[3,"Iter"],[3,"IterMut"],[15,"usize"],[4,"Method"],[8,"Middleware"],[3,"HttpRequest"],[3,"CapabilityContext"],[4,"StatusCode"],[3,"Url"],[3,"Pin"],[3,"Context"],[3,"Error"],[4,"Poll"],[3,"TypeId"],[4,"Version"],[3,"Client"],[3,"Next"],[3,"Redirect"],[8,"Future"],[3,"Box"],[8,"Fn"],[6,"BoxFuture"],[3,"HttpHeader"],[3,"ResponseBuilder"]]},\
"crux_kv":{"doc":"A basic Key-Value store for use with Crux","t":[3,4,4,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["KeyValue","KeyValueOperation","KeyValueOutput","Read","Read","Write","Write","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","deserialize","deserialize","eq","eq","fmt","fmt","from","from","from","into","into","into","map_event","new","read","serialize","serialize","to_owned","to_owned","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","write"],"q":["crux_kv","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","Supported operations","","Read bytes stored under a key","","Write bytes under a key","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Read a value under <code>key</code>, will dispatch the event with a …","","","","","","","","","","","","","","Set <code>key</code> to be the provided <code>value</code>. Typically the bytes …"],"i":[0,0,0,1,2,1,2,7,1,2,7,1,2,1,2,1,2,1,2,1,2,1,2,7,1,2,7,1,2,7,7,7,1,2,1,2,7,1,2,7,1,2,7,1,2,7],"f":[0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[1,1],[2,2],[[]],[[]],[[],[[3,[1]]]],[[],[[3,[2]]]],[[1,1],4],[[2,2],4],[[1,5],6],[[2,5],6],[[]],[[]],[[]],[[]],[[]],[[]],[7],[[[8,[1]]],7],[[7,9]],[1,3],[2,3],[[]],[[]],[[],3],[[],3],[[],3],[[],3],[[],3],[[],3],[[],10],[[],10],[[],10],[[7,9,[12,[11]]]]],"p":[[4,"KeyValueOperation"],[4,"KeyValueOutput"],[4,"Result"],[15,"bool"],[3,"Formatter"],[6,"Result"],[3,"KeyValue"],[3,"CapabilityContext"],[15,"str"],[3,"TypeId"],[15,"u8"],[3,"Vec"]]},\
"crux_macros":{"doc":"","t":[24],"n":["Effect"],"q":["crux_macros"],"d":[""],"i":[0],"f":[0],"p":[]},\
"crux_platform":{"doc":"TODO mod docs","t":[3,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Platform","PlatformRequest","PlatformResponse","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","deserialize","deserialize","eq","eq","fmt","fmt","from","from","from","get","into","into","into","map_event","new","serialize","serialize","to_owned","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id"],"q":["crux_platform","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","",""],"i":[0,0,0,7,1,3,7,1,3,1,1,1,3,1,3,1,3,7,1,3,7,7,1,3,7,7,1,3,1,7,1,3,7,1,3,7,1,3],"f":[0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[1,1],[[]],[[],[[2,[1]]]],[[],[[2,[3]]]],[[1,1],4],[[3,3],4],[[1,5],6],[[3,5],6],[[]],[[]],[[]],[7],[[]],[[]],[[]],[7],[[[8,[1]]],7],[1,2],[3,2],[[]],[[],2],[[],2],[[],2],[[],2],[[],2],[[],2],[[],9],[[],9],[[],9]],"p":[[3,"PlatformRequest"],[4,"Result"],[3,"PlatformResponse"],[15,"bool"],[3,"Formatter"],[6,"Result"],[3,"Platform"],[3,"CapabilityContext"],[3,"TypeId"]]},\
"crux_time":{"doc":"Current time access for Crux apps","t":[3,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Time","TimeRequest","TimeResponse","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","deserialize","deserialize","eq","eq","fmt","fmt","from","from","from","get","into","into","into","map_event","new","serialize","serialize","to_owned","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id"],"q":["crux_time","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["The Time capability API.","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Request current time, which will be passed to the app as …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","",""],"i":[0,0,0,7,1,3,7,1,3,1,1,1,3,1,3,1,3,7,1,3,7,7,1,3,7,7,1,3,1,7,1,3,7,1,3,7,1,3],"f":[0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[1,1],[[]],[[],[[2,[1]]]],[[],[[2,[3]]]],[[1,1],4],[[3,3],4],[[1,5],6],[[3,5],6],[[]],[[]],[[]],[7],[[]],[[]],[[]],[7],[[[8,[1]]],7],[1,2],[3,2],[[]],[[],2],[[],2],[[],2],[[],2],[[],2],[[],2],[[],9],[[],9],[[],9]],"p":[[3,"TimeRequest"],[4,"Result"],[3,"TimeResponse"],[15,"bool"],[3,"Formatter"],[6,"Result"],[3,"Time"],[3,"CapabilityContext"],[3,"TypeId"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
