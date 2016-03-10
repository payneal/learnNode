event = something taht happened in out app that we can respond to

in node we have 2 different kinds of events

system events = comes from C++ side (libuv) 
custom events = inside javascript code, deals with events I can creat for myself. I can say this happen and responsed to myself
(event emitter in JS core) 

we get confussed because js code wraps code often wraps code to the C++ side, when an event occus in libuv it generates js event often times

you can think of it sometimes as one event but it is not the js side is faking it, its not real evenst

one can say this because js doesnt have an eventing object but we can fake it because we can creat our own libary with the technic that node emitter uses





