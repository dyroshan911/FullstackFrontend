// pending, fulfilled, or rejected
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(excutor) {
    this.onFulledCallbacks = [];
    this.onRejectedCallbacks = [];
    let self = this;
    this.status = PENDING;
    function resolve(value) {
        if (value != null && value.then && typeof value.then === 'function') {
            return value.then(resolve, reject);
        }
        setTimeout(() => {
            if (self.status === PENDING) {
                self.status = FULFILLED;
                self.value = value;
                self.onFulledCallbacks.forEach(cb => cb(value));
            }
        });
    }
    function reject(reason) {
        setTimeout(() => {
            if (self.status === PENDING) {
                self.status = REJECTED;
                self.value = value;
                self.onRejectedCallbacks.forEach(cb => cb(reason));
            }
        });

    }
    excutor(resolve, reject);

}

Promise.prototype.then = function (onFulfilled, onRejected) {
    let self = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function(value) {return value;}
    onRejected = typeof onRejected === 'function' ? onRejected : function(reason){throw reason;}
    if (this.status === FULFILLED) {
        return new Promise(function(resolve, reject) {
            setTimeout(function(){
                try {
                    let x = onFulfilled(self.value);
                    //todo resolve x
                    resolve(x);
                } catch(e) {
                    reject(e);
                }
            });
        })
    }
    if (this.status === REJECTED) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                try {
                    let x = onRejected(self.value);
                    //todo resolve x
                    resolve(x)
                } catch(e) {
                    reject(e);
                }
            });
        })
    }
    if (this.status === PENDING) {
        return new Promise(function(resolve, reject) {
            self.onFulledCallbacks.push(function(){
                try {
                    let x = onFulfilled(self.value);
                    //todo resolve x
                    resolve(x);
                } catch(e) {
                    reject(e);
                }
            });
            self.onRejectedCallbacks.push(function(){
                try {
                    let x = onRejected(self.value);
                    //todo resolve x
                    resolve(x);
                } catch {
                    reject(e);
                }
            })
        })
    }
}