const Counter = artifacts.require("Counter");

contract("Counter", async () => {
  it('counter should increment by 1', async () => {
    const instance = await Counter.deployed();
    await instance.increment()
    const count = await instance.getCount()
    assert.equal(count.toNumber(), 1, "fail");
  })

    it('counter should decrement by 1', async () => {
    const instance = await Counter.deployed();
    await instance.setCount(1)
    await instance.decrement()
    const count = await instance.getCount()
    assert.equal(count.toNumber(), 0, "fail");
  })
})