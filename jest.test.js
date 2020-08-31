//第一个参数为用例的名称，第二个参数是个回调，用例的逻辑
test('test common matcher',()=>{
  expect(2+2).toBe(4)
  expect(2+2).not.toBe(5)
})

test('test to be true or false',()=>{
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test number',()=>{
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(5)
})

//toBe是测试完全相同，如果是测值相同则用toEqual
test('test object',()=>{
  expect({name:'viking'}).toEqual({name:'viking'})
})