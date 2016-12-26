var EventEmitter = require('events').EventEmitter;
var util = require('util');

function MemoryWatcher(opts) {
  if (!(this instanceof MemoryWatcher)) {
    return new MemoryWatcher();
  }

  opts = opts || {
    frequency: 30000 // 30 seconds
  };

  EventEmitter.call(this);

  var that = this;

  setInterval(function() {
		var bytes = process.memoryUsage().rss;

		if (opts.maxBytes && bytes > opts.maxBytes) {
			that.emit('error', new Error('Memory exceeded ' + opts.maxBytes + ' bytes'));
		} else {
			that.emit('data', bytes);
		}
	}, 
	opts.frequency);
}

util.inherits(MemoryWatcher, EventEmitter);

//Using it is very simple:

var mem = new MemoryWatcher({
  maxBytes: 12455936,
  frequency: 5000
});

mem.on('data', function(bytes) {
  console.log(bytes);
})

mem.on('error', function(err) {
  throw err;
});